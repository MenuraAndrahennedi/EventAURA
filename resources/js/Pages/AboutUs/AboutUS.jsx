import React from 'react'
import MainHeader from '@/Components/Header/MainHeader';
import { motion } from 'framer-motion';
import '../../../css/AboutUs.scss';
const AboutUS = () => {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <header>
          <MainHeader />
      </header>

        <section className="aboutus-section">
        <motion.div
          className="aboutus-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            About <span className="highlight">EventAura</span>
          </h1>
          <p>
            Revolutionizing event planning and management with innovation and simplicity.
          </p>
        </motion.div>

        <div className="aboutus-content">
          <motion.div
            className="aboutus-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2>Our Mission</h2>
            <p>
              To empower event creators with a user-first digital platform that simplifies
              planning, enhances promotion, and enables seamless ticketing — all while
              delivering an unforgettable attendee experience.
            </p>
          </motion.div>

          <motion.div
            className="aboutus-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>Why EventAura?</h2>
            <ul className="mb-0 custom-list ps-3">
              <li>Streamlined event creation and publishing</li>
              <li>Effortless ticketing and guest management</li>
              <li>Real-time analytics and insights</li>
              <li>A platform built for both organizers and attendees</li>
            </ul>
          </motion.div>

          <motion.div
            className="aboutus-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2>Who We Are</h2>
            <p>
              We are <strong>Code Catalysts</strong>, a team of passionate developers,
              designers, and innovators committed to crafting tools that connect people
              through amazing experiences. We build with precision, passion, and purpose.
            </p>
          </motion.div>
        </div>

        <div className="aboutus-quote">
          <p>“We don’t just create events. We create moments.”</p>
        </div>
      </section>
      {/*<footer>
        <MainFooter />
      </footer>*/}
      </div>
  )
}

export default AboutUS
