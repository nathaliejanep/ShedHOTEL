import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Faq.scss';
import { useLanguage } from '../../context/LanguageContext';

const Faq = () => {
  const { language } = useLanguage();
  const [faqs, setFaqs] = useState([]);

  const getData = () => {
    axios
      .get(`api/faq.${language}.json`)
      .then((res) => {
        setFaqs(res.data.faqs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <div className='container faq'>
      <section className='container__section'>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <p>
              {faq.answer}
              {faq.hasLink && <NavLink to='/shedgoomah'> Shed. GOOMAH</NavLink>}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faq;
