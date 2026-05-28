<?php

namespace Database\Seeders;

use App\Models\Artist;
use App\Models\Click;
use App\Models\Event;
use App\Models\EventHostPayment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DemoConcertEventSeeder extends Seeder
{
    //private string $sourceRoot = 'Events';
    private string $sourceRoot;

    public function __construct()
    {
        $this->sourceRoot = database_path('Events');
    }

    public function run(): void
    {
        $eventHost = User::where('email', 'eventhost1@example.com')->where('role_id', 4)->firstOrFail();

        $artists = $this->seedArtists();
        $events = $this->eventData($eventHost->id);

        DB::transaction(function () use ($events, $artists, $eventHost): void {
            foreach ($events as $eventData) {
                $assets = $this->copyAssets($eventData['folder'], $eventData['name']);
                $eventAttributes = collect($eventData)
                    ->except(['folder', 'artists', 'clicks'])
                    ->all();

                $event = Event::updateOrCreate(
                    ['name' => $eventData['name']],
                    array_merge($eventAttributes, $assets)
                );

                $event->artists()->sync($this->artistIds($artists, $eventData['artists']));

                if ($event->event_status === 'completed') {
                    Click::updateOrCreate(
                        ['event_id' => $event->id],
                        ['number_of_clicks' => $eventData['clicks']]
                    );

                    EventHostPayment::firstOrCreate(
                        ['transaction_id' => 'demo-host-payment-' . $event->id],
                        [
                            'event_host_id' => $eventHost->id,
                            'amount' => 5000,
                            'payment_status' => 'completed',
                        ]
                    );
                }
            }
        });
    }

    private function seedArtists(): array
    {
        $artists = [
            ['name' => 'Bathiya and Santhush', 'role' => 'Pop Duo', 'bio' => 'A leading Sri Lankan pop duo known for large-scale Sinhala and English live performances.'],
            ['name' => 'Daddy', 'role' => 'Band', 'bio' => 'A popular Sri Lankan pop-rock band with a strong live concert following.'],
            ['name' => '2Forty2', 'role' => 'Band', 'bio' => 'A contemporary Sri Lankan band known for energetic stage performances and crowd-focused sets.'],
            ['name' => 'Sanuka Wickramasinghe', 'role' => 'Vocalist', 'bio' => 'A well-known Sri Lankan singer and composer with modern pop and acoustic influences.'],
            ['name' => 'Suneera Sumanga', 'role' => 'Vocalist', 'bio' => 'A Sri Lankan vocalist associated with intimate acoustic and coffee-house style performances.'],
            ['name' => 'Umaria Sinhawansa', 'role' => 'Vocalist', 'bio' => 'An acclaimed Sri Lankan vocalist known for powerful live vocals and fusion performances.'],
            ['name' => 'Yohani', 'role' => 'Vocalist', 'bio' => 'A Sri Lankan pop artist with international recognition and contemporary live sets.'],
            ['name' => 'Dinesh Gamage', 'role' => 'Vocalist', 'bio' => 'A Sri Lankan singer and songwriter known for popular modern Sinhala music.'],
            ['name' => 'Nadeemal Perera', 'role' => 'Vocalist', 'bio' => 'A Sri Lankan vocalist known for melodic live performances and popular collaborations.'],
            ['name' => 'Wayo', 'role' => 'Band', 'bio' => 'A Sri Lankan band known for Sinhala pop-rock and concert productions.'],
            ['name' => 'Marians', 'role' => 'Band', 'bio' => 'A long-running Sri Lankan band known for live entertainment and classic concert performances.'],
            ['name' => 'Infinity', 'role' => 'Band', 'bio' => 'A Sri Lankan live band commonly associated with mainstream events and dance concerts.'],
        ];

        $seeded = [];

        foreach ($artists as $artist) {
            $seeded[$artist['name']] = Artist::updateOrCreate(
                ['name' => $artist['name']],
                $artist
            );
        }

        return $seeded;
    }

    private function eventData(int $eventHostId): array
    {
        $today = Carbon::today();

        return [
            $this->event('Event 02', 'Kumarayan Live in Concert', 'completed', $today->copy()->subDays(14), '18:30', '22:30', 'Nelum Pokuna Mahinda Rajapaksa Theatre', 'Colombo', 'Colombo 07', 'A premium Sinhala music night built around orchestral arrangements, nostalgic favourites, and a polished concert-theatre atmosphere.', ['Bathiya and Santhush', 'Umaria Sinhawansa', 'Sanuka Wickramasinghe'], [450, 300, 180], [8500, 5500, 3500], $eventHostId, 86),
            $this->event('Event 03', 'Urban Pulse 25', 'completed', $today->copy()->subDays(7), '19:00', '23:30', 'Trace Expert City', 'Colombo', 'Maradana', 'A city-centred youth music festival with pop, hip-hop, DJ interludes, and a compact urban stage experience.', ['Yohani', 'Dinesh Gamage', 'Nadeemal Perera'], [500, 350, 250], [7500, 5000, 3000], $eventHostId, 121),
            $this->event('Event 04', 'Daddy x 2Forty2 Arena Night', 'pending', $today->copy()->addDays(9), '18:00', '23:00', 'Sugathadasa Indoor Stadium', 'Colombo', 'Colombo 14', 'A full-band arena show combining the crowd energy of Daddy and 2Forty2 with sing-along Sinhala pop-rock sets.', ['Daddy', '2Forty2'], [650, 450, 300], [9000, 6500, 4000], $eventHostId, 0),
            $this->event('Event 05', 'Rhythm of Ceylon', 'pending', $today->copy()->addDays(15), '17:30', '22:00', 'Viharamahadevi Open Air Theatre', 'Colombo', 'Colombo 07', 'A cultural-fusion music evening blending contemporary Sri Lankan vocals, percussion, and open-air festival staging.', ['Wayo', 'Umaria Sinhawansa', 'Marians'], [550, 380, 260], [8000, 5200, 3000], $eventHostId, 0),
            $this->event('Event 06', 'Coffee with Suneera', 'pending', $today->copy()->addDays(23), '18:30', '21:30', 'Nuga Gama', 'Colombo', 'Cinnamon Grand', 'An intimate acoustic evening with warm lighting, storytelling, and stripped-back arrangements for a relaxed weekend crowd.', ['Suneera Sumanga', 'Nadeemal Perera'], [180, 120, 80], [5000, 3500, 2200], $eventHostId, 0),
            $this->event('Event 07', 'Subterra Underground Sessions', 'pending', $today->copy()->addDays(31), '20:00', '23:59', 'The Warehouse Project', 'Colombo', 'Borella', 'A late-night alternative concert with electronic textures, indie sets, and a darker underground stage design.', ['Yohani', 'Dinesh Gamage', 'Infinity'], [300, 220, 160], [6500, 4500, 2800], $eventHostId, 0),
            $this->event('Event 08', 'Colombo Summer Sounds', 'completed', $today->copy()->addDays(5), '18:00', '23:00', 'Port City Colombo Event Lawn', 'Colombo', 'Port City', 'A waterfront summer concert with mainstream Sinhala pop, DJ transitions, food stalls, and a sunset-to-night festival mood.', ['Bathiya and Santhush', 'Yohani', 'Dinesh Gamage'], [900, 650, 450], [10000, 7000, 4500], $eventHostId, 205),
            $this->event('Event 09', 'Galle Face Sunset Beats', 'completed', $today->copy()->addDays(12), '17:00', '22:30', 'Galle Face Green', 'Colombo', 'Galle Face', 'A relaxed seaside live-music festival featuring contemporary pop, acoustic favourites, and family-friendly evening entertainment.', ['Sanuka Wickramasinghe', 'Nadeemal Perera', 'Wayo'], [800, 600, 400], [8500, 5800, 3500], $eventHostId, 174),
            $this->event('Event 10', 'Kandy Lake Music Fiesta', 'completed', $today->copy()->addDays(19), '18:30', '23:00', 'Bogambara Stadium', 'Kandy', 'Bogambara', 'A hill-country concert night with big-band arrangements, popular Sinhala hits, and a festive outdoor crowd atmosphere.', ['Marians', 'Daddy', 'Umaria Sinhawansa'], [700, 500, 350], [9000, 6000, 3800], $eventHostId, 143),
            $this->event('Event 11', 'Negombo Beach Live', 'completed', $today->copy()->addDays(27), '18:00', '23:30', 'Negombo Beach Park', 'Negombo', 'Lewis Place', 'A beachside concert with danceable live-band sets, pop vocals, and a bright coastal stage setup.', ['2Forty2', 'Infinity', 'Yohani'], [750, 520, 360], [8000, 5500, 3500], $eventHostId, 167),
            $this->event('Event 12', 'Matara Coastline Concert', 'completed', $today->copy()->addDays(36), '18:00', '22:45', 'Sanath Jayasuriya Stadium', 'Matara', 'Matara', 'A southern-coast music celebration with high-energy live bands, food vendors, and wide family seating sections.', ['Wayo', 'Dinesh Gamage', 'Suneera Sumanga'], [650, 420, 300], [7800, 5200, 3200], $eventHostId, 118),
            $this->event('Event 13', 'Jaffna Fusion Night', 'completed', $today->copy()->addDays(44), '18:30', '22:30', 'Duraiappah Stadium', 'Jaffna', 'Jaffna Town', 'A cross-cultural fusion concert combining Sri Lankan pop vocals, bilingual moments, and rhythmic band performances.', ['Bathiya and Santhush', 'Umaria Sinhawansa', 'Infinity'], [600, 400, 280], [8500, 5800, 3600], $eventHostId, 132),
            $this->event('Event 14', 'Nuwara Eliya Misty Melodies', 'completed', $today->copy()->addDays(52), '17:30', '21:45', 'Race Course Grounds', 'Nuwara Eliya', 'Nuwara Eliya', 'A cooler-climate evening concert built around acoustic pop, soft rock, and scenic festival staging.', ['Sanuka Wickramasinghe', 'Nadeemal Perera', 'Marians'], [500, 340, 220], [7500, 5000, 3000], $eventHostId, 109),
        ];
    }

    private function event(string $folder, string $name, string $status, Carbon $date, string $startTime, string $endTime, string $venue, string $city, string $organizer, string $description, array $artists, array $counts, array $prices, int $eventHostId, int $clicks): array
    {
        return [
            'folder' => $folder,
            'name' => $name,
            'date' => $date->toDateString(),
            'startTime' => $startTime,
            'endTime' => $endTime,
            'description' => $description,
            'location' => 'https://www.google.com/maps/search/?api=1&query=' . rawurlencode($venue . ', ' . $city . ', Sri Lanka'),
            'bronze_ticket_count' => $counts[2],
            'silver_ticket_count' => $counts[1],
            'golden_ticket_count' => $counts[0],
            'total_bronze_ticket_count' => $counts[2],
            'total_silver_ticket_count' => $counts[1],
            'total_golden_ticket_count' => $counts[0],
            'event_status' => $status,
            'city' => $city,
            'venue' => $venue,
            'organizer' => $organizer,
            'bronze_ticket_price' => $prices[2],
            'silver_ticket_price' => $prices[1],
            'golden_ticket_price' => $prices[0],
            'return_policies' => 'Tickets are refundable up to 72 hours before the event. Date changes or cancellations will be handled through EventAURA support.',
            'event_host_id' => $eventHostId,
            'artists' => $artists,
            'clicks' => $clicks,
        ];
    }

    private function copyAssets(string $folder, string $eventName): array
    {
        $sourceDir = $this->sourceRoot . '/' . $folder;
        $slug = Str::slug($eventName);

        return [
            'image' => $this->copyFirstMatchingFile($sourceDir, ['png', 'jpg', 'jpeg', 'webp'], 'images', $slug),
            'agenda_pdf' => $this->copyFirstMatchingFile($sourceDir, ['pdf'], 'pdfs', $slug),
            'event_video' => $this->copyFirstMatchingFile($sourceDir, ['mp4', 'avi', 'mkv'], 'videos', $slug),
        ];
    }

    private function copyFirstMatchingFile(string $sourceDir, array $extensions, string $targetDir, string $slug): ?string
    {
        Storage::disk('public')->makeDirectory($targetDir);

        $files = File::isDirectory($sourceDir) ? File::files($sourceDir) : [];
        $fallbackFiles = File::isDirectory($this->sourceRoot) ? File::allFiles($this->sourceRoot) : [];

        foreach (array_merge($files, $fallbackFiles) as $file) {
            if (! in_array(strtolower($file->getExtension()), $extensions, true)) {
                continue;
            }

            $target = $targetDir . '/' . $slug . '.' . strtolower($file->getExtension());
            File::copy($file->getPathname(), Storage::disk('public')->path($target));

            return $target;
        }

        return null;
    }

    private function artistIds(array $artists, array $names): array
    {
        return collect($names)
            ->map(fn (string $name) => $artists[$name]->id)
            ->values()
            ->all();
    }
}
