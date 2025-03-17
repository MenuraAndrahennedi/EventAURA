import React from 'react'
import './TBEventDetails.scss';
import { Link } from 'react-router-dom';

import TBHeader from './../../Components/Header/TBHeader';
import SearchBar from './../../Components/SearchBar';
import SubFooter from './../../Components/Footer/SubFooter';
import BannerImage from '../../assets/banner.png';
import HostImage from '../../assets/HostLogo.png';
import eventbanner from '../../assets/BG-10.png';

const TBEventDetails = () => {
  return (
   <>
     <header>
        <TBHeader />
      </header>

      {/*Search Bar */}
      <div className="search-bar-section">
        <SearchBar />
      </div>


      {/* Event Details Section */}
      <section className="event-details">
          <div className="banner" style={{backgroundImage: `url(${eventbanner})`, }}>
          <h1 className="banner-title"><b>SKY HEROES</b></h1>
        </div>
        
        <div className="event-info">

            <div className="event-poster">
              <img src={BannerImage} alt="Event Poster" />
            </div>

            <div className="event-description">
              <p>Join us for an unforgettable night of live music at Rythms Under the Stars!
              Featuring renowned artistsacross genres like rock.pop and indie.This  concert 
              will be held in the beautiful setting of National Youth Service Council Auditorium, Maharagama.Enjoy mesmerizing
              performance under the night sky with delicious food stalls,cozy seating and vibrant atmosphere.</p>
                  <div className="event-meta">
                    <p><strong>Date:</strong> 01 April 2025</p>
                    <p><strong>Venue:</strong> National Youth Service Council Auditorium | Maharagama</p>
                    <p><strong>Organizer:</strong>Eventmela</p>
                    <div className="button-row">
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="button-link">Location</a>
                        {/* Download PDF */}
                        <a href="/path/to/agenda.pdf" download className="button-link">Agenda.pdf</a> {/*set the path */}
                    </div>
                  </div>
                  <div className="event-buttons">
                    <Link to="/BuyTickets" className="buy-tickets">Buy Tickets</Link>
                    <Link to="/return-policies" className="return-policies">Return Policies</Link>
                  </div>
            </div>
            
        </div>
        
      </section>

      {/* Artists Section */}
      <section className="artists">
        <h2><b>Artists</b></h2>
        <div className="artist-list">
          
            <p>
                <span className="artist-name">Sajith Premadasa</span>
                <br />
                <span className="artist-role">Drummer/Musician</span>
            </p>
            <p>
                <span className="artist-name">Ranil Wickramasinghe</span>
                <br />
                <span className="artist-role">Actor</span>
            </p>
            <p>
                <span className="artist-name">Anura Dissanayake</span>
                <br />
                <span className="artist-role">Party Time Talker</span>
          </p>
          <p>
                <span className="artist-name">Kamal Perera</span>
                <br />
                <span className="artist-role">Guitarist</span>
            </p>
            <p>
                <span className="artist-name">Ajith Kumarasena </span>
                <br />
                <span className="artist-role">Vocalist</span>
            </p>
            <p>
                <span className="artist-name">Nalin Mendis</span>
                <br />
                <span className="artist-role">Bass Player</span>
          </p>

          
        </div>
      </section>


     {/* Video Section */}
      <section className="video-section">
        <div className="video-placeholder">
          <p>VIDEO</p>{/* Placeholder text for now */}
          {/* <video src="path/to/event-video.mp4" controls /> */}{/* Uncomment and replace src  */}
        </div>
      </section>

      

      {/* Contact Host Section */}
      <section className="contact-host">
        <div className="text-center">
          <div className="host-text-image">
            <Link to='/HostContact' className='Host'>Get in touch with the host</Link>
            <img src={HostImage} alt='HostIcon' className='Host-icon' />
          </div>
          <p>Here we have provided you the chance to contact <br /> with the event organizer and solve your problems <br/>about the event.</p>
        </div>
      </section>

      <footer>
        <SubFooter />
      </footer>
   </>
  )
}

export default TBEventDetails
