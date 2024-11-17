import React from 'react';
import { NavLink } from 'react-router-dom';
import './Faq.scss';

// import { useLoaderData } from 'react-router-dom';

const Faq = () => {
  // const season = useLoaderData();
  return (
    <div className='container faq'>
      <section className='container__section'>
        <h3>What are your check-in and check-out times?</h3>
        <p>
          Check-in is at 3 PM and check-out is at 11 AM. We kindly request that
          all guests check-in before 9 PM, but we do make exceptions for late
          arrivals. If you plan to arrive after 9 PM, please inform us
          beforehand so that we can arrange a smooth check-in process for you.
        </p>
        <h3>Is there an age limit for guests?</h3>
        <p>
          No, there is no age limit for guests. We welcome travelers of all
          ages, and we strive to provide a safe, comfortable, and welcoming
          environment for everyone who stays with us. Whether you are a family
          with children, a solo traveler, or a group of friends, we have
          something for everyone.
        </p>
        <h3>Are pets allowed in the hotel?</h3>
        <p>
          Yes, we do allow pets, but a fee may apply. We understand that pets
          are part of the family and we want to ensure that they are as
          comfortable as their owners during their stay. If you are traveling
          with a pet, please inform us in advance so that we can make
          arrangements for you and your furry friend. There may be a small fee
          for this service, but it will be worth it to have your pet by your
          side during your stay.
        </p>
        <h3>Is breakfast included in the room rate?</h3>
        <p>
          Yes, breakfast is included in the room rate and is served daily in our
          on-site restaurant.
        </p>
        <h3>Do you have a restaurant on-site?</h3>
        <p>
          Yes, we have a restaurant located inside the hotel. Check the link for
          more information
          <NavLink to='/shedgoomah'> Shed. GOOMAH</NavLink>
        </p>
        <h3>What type of payment do you accept?</h3>
        <p>
          We accept all major credit cards and cash payments. We use secure
          payment processing systems to ensure the safety and security of your
          personal and financial information. You can make payments for your
          stay or for any additional services or amenities with ease and
          confidence, knowing that your information is protected at all times.
        </p>
        <h3>Do you offer airport transfer services?</h3>
        <p>
          We've partnered with local transportation companies for reliable
          airport transfers. Let us know your travel plans and we'll arrange
          transportation for you. We're committed to making your travel
          experience comfortable and hassle-free.
        </p>
        <h3>Is parking available for guests?</h3>
        <p>
          We offer on-site parking in a garage for a fee, but please note that
          it is limited and subject to availability. Due to the limited
          availability of parking spaces, we recommend reserving your spot in
          advance to ensure availability during your stay. Our team will be
          happy to assist you with any questions or concerns you may have about
          parking.
        </p>
      </section>
    </div>
  );
};

export default Faq;
