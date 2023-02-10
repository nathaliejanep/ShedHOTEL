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
            Contact us for any inquiries or to book a room. Our friendly staff
            will be happy to assist you. For restaurant reservations, please
            call 078 226 02 26 to secure your table and experience the finest
            dining in town.
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
