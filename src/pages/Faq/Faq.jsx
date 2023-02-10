import React from 'react';
import './Faq.scss';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
  // const season = useLoaderData();
  return (
    <div className="container faq">
      <section className="container__section">
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
        <h3>Do you have a restaurant on-site?</h3>
        <p>
          Yes, we have a restaurant that serves a variety of delicious dishes.
          Our restaurant offers a wide range of menu options, including local
          specialties, international dishes, and vegetarian options. Whether you
          are in the mood for a hearty breakfast, a light lunch, or a romantic
          dinner, our restaurant has something to suit every taste and occasion.
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
          Yes, we offer airport transfer services for a fee. Our airport
          transfer service is a convenient and comfortable way to start your
          stay with us. Whether you are traveling alone or with a group, we have
          vehicles to accommodate your needs. Our drivers are professional,
          friendly, and knowledgeable, and they will be happy to answer any
          questions you may have about the area and the hotel.
        </p>
        <h3>Is parking available for guests?</h3>
        <p>
          Yes, we have parking available for guests at no additional cost. Our
          hotel provides ample parking for all guests, so you never have to
          worry about finding a spot for your vehicle. Whether you are driving a
          car, a truck, or a motorcycle, we have a space for you. Our parking is
          secure, well-lit, and easily accessible, so you can park with peace of
          mind and enjoy your stay.
        </p>
        <h3>Do you offer room service?</h3>
        <p>
          Yes, we offer room service for guests who would like to dine in their
          room. Our room service menu features a selection of delicious dishes,
          including breakfast items, light snacks, and full meals. Whether you
          prefer to enjoy a quiet breakfast in bed, a late-night snack, or a
          romantic dinner by candlelight
        </p>
      </section>
    </div>
  );
};

export default Faq;
