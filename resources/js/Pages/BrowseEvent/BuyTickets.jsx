import React from 'react'
import './BuyTickets.scss';
import { Link } from 'react-router-dom';

import TBHeader from './../../Components/Header/TBHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import SearchBar from './../../Components/SearchBar';
import HostImage from '../../assets/HostLogo.png';

const BuyTickets = () => {
  return (
    <>
       <header>
        <TBHeader />
      </header>

      {/*Search Bar */}
      <div className="search-bar-section">
        <SearchBar />
      </div>

      {/* ticket Section */}
      <section className="event-Details">

        <div className="banner">
          <h1 className="banner-title"><b>SKY HEROES</b></h1>
        </div>

        <Link to="/TBEventDetails" className = 'view-event' >View Event Details</Link>

        <div className="event-info">

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
                </div>

               <div className="ticket-categories">
                  <h3>Ticket Categories</h3>

                  <div className="ticket-option">
                    <div className="ticket-details">
                      <span className="ticket-name">Golden Ticket</span>
                      <span className="ticket-availability">Available Tickets:</span>
                      <label className="ticket-select-label">Select Tickets:</label>
                    </div>
                    <div className="ticket-select">
                      <span className="ticket-price">15,000 LKR per ticket</span>
                      <span className="ticket-price">50</span>
                      <input type="number" min="0" placeholder="count" />
                    </div>
                  </div>

                  <div className="ticket-option">
                    <div className="ticket-details">
                      <span className="ticket-name">Silver Ticket</span>
                      <span className="ticket-availability">Available Tickets:</span>
                      <label className="ticket-select-label">Select Tickets:</label>
                    </div>
                    <div className="ticket-select">
                      <span className="ticket-price">10,000 LKR per ticket</span>
                      <span className="ticket-price">50</span>
                      <input type="number" min="0" placeholder="count" />
                    </div>
                  </div>

                  <div className="ticket-option">
                    <div className="ticket-details">
                      <span className="ticket-name">Bronze Ticket</span>
                      <span className="ticket-availability">Available Tickets:</span>
                      <label className="ticket-select-label">Select Tickets:</label>
                    </div>
                    <div className="ticket-select">
                      <span className="ticket-price">05,000 LKR per ticket</span>
                      <span className="ticket-price">50</span>
                      <input type="number" min="0" placeholder="count" />
                    </div>
                  </div>

                  <Link to="/TBCart"><button className="add-to-cart">Add to Cart</button></Link>
                </div>

              </div>
      </section>



      {/* Cart Details */}
      <section className="cart-details">
        <h3>Cart Details</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Per Ticket</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Golden Ticket</td>
              <td>15,000 LKR</td>
              <td>2</td>
              <td>30,000 LKR</td>
            </tr>
            <tr>
              <td>Silver Ticket</td>
              <td>10,000 LKR</td>
              <td>3</td>
              <td>30,000 LKR</td>
            </tr>
            <tr>
              <td>Bronze Ticket</td>
              <td>5,000 LKR</td>
              <td>4</td>
              <td>20,000 LKR</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Amount</td>
              <td>80,000 LKR</td>
            </tr>
          </tfoot>
        </table>

        <div className="event-buttons">
            <Link to="/return-policies" className="return-policies">Return Policies</Link>
            <Link to="/TBCart" className="tbCart"> Continue</Link>
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

export default BuyTickets
