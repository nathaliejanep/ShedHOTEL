import React from 'react';
import './Contact.scss';
import contactHero from '../../assets/images/contact.jpg';
const Contact = () => {
  return (
    <div className="contact">
      <section className="hero">
        <img
          className="hero-image hotel-hero"
          src={contactHero}
          alt="Shed Hotel fasade"
        />
      </section>

      <div className="container">
        <section className="container__section">
          <h1>Contact</h1>
          <p>
            With a personal approach to service, everyone at Shed. HOTEL is at
            your disposal to ensure that even your most spontaneous requests are
            met when booking your next stay with us. Just call or email us with
            any enquiries.
          </p>
          <br />
          <p>
            <a href="mailto:info@shedhotels.com">info@shedhotels.com</a>
          </p>
          <br />
          <p>
            Having questions about our restaurant? Please contact
            <br />
            <a href="tel:+41782260226">078 226 02 26</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
