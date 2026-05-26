# EventAURA

EventAURA is a Laravel and React event management platform for browsing events, purchasing tickets, hosting events, and managing platform operations through separate role-based dashboards.

## Features

- Ticket buyer registration and event browsing
- Event host registration and event creation
- Admin, manager, and programmer dashboards
- Event approval and update request workflows
- Ticket purchasing and payment reporting
- Reviews, inquiries, and internal moderation tools

## Tech Stack

- Laravel 11
- PHP 8.2
- React with Inertia.js
- Vite
- MySQL or MariaDB
- Bootstrap and Sass

## Setup and Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd EventAURA
```

### 2. Install backend dependencies

```bash
composer install
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Create the local database

Create a MySQL or MariaDB database named `eventaura` using phpMyAdmin or the MySQL CLI.

Example:

```sql
CREATE DATABASE eventaura;
```

### 5. Configure the environment

Copy `.env.example` to `.env` if it does not already exist.

Set the basic app and database values in `.env`:

```env
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=eventaura
DB_USERNAME=root
DB_PASSWORD=
```

Add Stripe test keys in `.env`:

```env
VITE_STRIPE_KEY=pk_test_your_publishable_key
STRIPE_KEY=pk_test_your_publishable_key
STRIPE_SECRET=sk_test_your_secret_key
```

Stripe key usage:

- `VITE_STRIPE_KEY` = frontend Stripe publishable key
- `STRIPE_KEY` = backend reference to the same publishable key
- `STRIPE_SECRET` = backend Stripe secret key required to create checkout sessions

Also make sure:

- the `eventaura` database exists
- the Stripe keys are copied from the Stripe dashboard in test mode

### 6. Generate the application key

```bash
php artisan key:generate
```

### 7. Create the public storage link

```bash
php artisan storage:link
```

This makes uploaded images, PDFs, and videos available through `/storage/...` URLs.

### 8. Clear Laravel config cache

```bash
php artisan config:clear
php artisan cache:clear
```

### 9. Run migrations and seed the required roles and first admin

```bash
php artisan migrate --seed
```

During seeding, the app will ask you to enter:

- the email address for the first admin account
- the password for the first admin account

This setup will automatically create:

- all required roles in the `roles` table
- the first admin user with `role_id = 3`

The following role IDs are required by the current application logic:

- `1` = Programmer
- `2` = Manager
- `3` = Admin
- `4` = Event Host
- `5` = Ticket Buyer

### 10. Start the application

Open two terminals in the project folder.

In terminal 1, run the Laravel server:

```bash
php artisan serve
```

In terminal 2, run the Vite development server:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:8000
```

You can also use the combined Laravel development command:

```bash
composer run dev
```

## Fresh Run Summary

For a brand-new clone, the normal order is:

1. `git clone <repo>`
2. `composer install`
3. `npm install`
4. create the `eventaura` database
5. configure `.env`
6. add Stripe keys
7. `php artisan key:generate`
8. `php artisan storage:link`
9. `php artisan config:clear`
10. `php artisan cache:clear`
11. `php artisan migrate --seed`
12. `php artisan serve`
13. `npm run dev`

## Login and Registration Paths

### Admin, manager, and programmer login

- `http://127.0.0.1:8000/other-login`

### Ticket buyer login and signup

- Login: `http://127.0.0.1:8000/tb-login`
- Register: `http://127.0.0.1:8000/tb-register`

### Event host login and signup

- Login: `http://127.0.0.1:8000/eh-login`
- Register: `http://127.0.0.1:8000/eh-register`

### Admin dashboard

After logging in with an admin account, the app redirects to:

- `http://127.0.0.1:8000/admin/dashboard`

## First-Time Admin Workflow

After signing in as admin:

1. Open the admin dashboard.
2. Go to the add-member page at `/add-new-member`.
3. Create manager accounts from there.
4. Event hosts can register from `/eh-register`.
5. Ticket buyers can register from `/tb-register`.

## Folder Structure

```text
EventAURA/
|-- app/                    Core application code, controllers, models, middleware
|-- bootstrap/             Laravel bootstrap and app configuration
|-- config/                Framework and package configuration
|-- database/
|   |-- migrations/        Database schema definitions
|   |-- seeders/           Initial roles and admin setup
|   |-- factories/         Model factories for tests and sample data
|-- public/                Public entrypoint and static assets
|-- resources/
|   |-- js/                React and Inertia frontend
|   |-- css/               Sass and CSS styles
|   |-- views/             Blade views, emails, PDFs, vendor templates
|-- routes/                Web, auth, console, and package routes
|-- storage/               Logs, cache, sessions, generated files
|-- tests/                 Feature and unit tests
|-- vendor/                Composer dependencies
|-- package.json           Frontend dependency manifest
|-- composer.json          Backend dependency manifest
|-- .env.example           Environment template
```

## Database Notes

- Local account registration depends on valid rows existing in the `roles` table.
- Ticket buyer registration uses `role_id = 5`.
- Event host registration uses `role_id = 4`.
- If the roles table is missing those rows, signup will fail because of the `users.role_id` foreign key.
- The first admin account is created during `php artisan migrate --seed`.

## Common Commands

```bash
php artisan migrate
php artisan db:seed
php artisan migrate:fresh --seed
php artisan storage:link
php artisan config:clear
php artisan cache:clear
php artisan test
npm run dev
npm run build
```

## Notes for Contributors

- Use `php artisan migrate --seed` on a fresh setup so the required role data exists.
- The first admin account is intentionally chosen interactively during seeding instead of being hardcoded.
- This repository currently uses role IDs directly throughout route middleware and controllers, so those IDs must remain consistent unless the authorization logic is refactored.
