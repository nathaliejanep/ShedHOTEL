import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    // event.preventDefault();
    setEmail('');
    // Implement the form submission logic here
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const email = event.target.EMAIL.value;
  //     axios
  //       .post('https://shedhotels.us7.list-manage.com/subscribe/post-json', {
  //         EMAIL: email,
  //         u: '5d7c78757f10fe3725b126afe',
  //         id: '827ba4dea7',
  //         b_YOUR_UNIQUE_ID_YOUR_LIST_ID: '0024c5e4f0',
  //       })
  //       .then((response) => {
  //         // The form submission was successful
  //         console.log('Subscribed successfully');
  //       })
  //       .catch((error) => {
  //         // The form submission failed
  //         console.error('Failed to subscribe');
  //       });
  //   };
  return (
    <>
      <form
        action="https://shedhotels.us7.list-manage.com/subscribe/post?u=5d7c78757f10fe3725b126afe&amp;id=827ba4dea7&amp;f_id=0024c5e4f0"
        // onSubmit={handleSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        // novalidate
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Email address"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="subscribe__input"
        />
        <button type="submit" className="subscribe__btn">
          Subscribe
        </button>

        <input type="hidden" name="b_YOUR_UNIQUE_ID_YOUR_LIST_ID" value="" />
      </form>
    </>
  );
};

export default Subscribe;
