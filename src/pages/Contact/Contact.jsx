import React from 'react';
import './Contact.scss';
import contactHero from '../../assets/images/contact.jpg';
const Contact = () => {
  return (
    <div className="contact">
      <section className="hero">
        <img className="hero-image" src={contactHero} alt="People talking" />
      </section>

      <div className="container">
        <section className="container__section">
          <h1>Contact</h1>
          <p>
            About us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec elit ligula, laoreet et arcu at, dignissim blandit ligula.
            Suspendisse elementum tristique est, eget pulvinar tellus tristique
            at.
          </p>
          <p>
            <a href="mailto:info@shedhotels.com">info@shedhotels.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
