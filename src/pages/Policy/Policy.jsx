import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import '../../sassStyles/layouts/_terms-layout.scss';

const Policy = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`api/policies.${language}.json`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
    return;
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <div className="terms">
      <section className="terms__section">
        <h1>{t.policy.title}</h1>

        <p>
          {t.policy.intro}
        </p>
      </section>
      <section className="terms__section">
        {data?.policies?.map((policy, i) => (
          <div key={i}>
            <h3>{policy.title}</h3>
            <p>{policy.text}</p>
          </div>
        ))}
      </section>
      {/* ADD TO API
        SAFETY DEPOSIT BOX Shed. HOTEL provides a safety deposit box in the
        rooms. For detailed information, please ask at the Reception. The Hotel
        is not responsible for any valuables and money, left unlocked and
        outside the individual safe, including those in the guest’s rooms and
        public areas.
    */}
    </div>
  );
};

export default Policy;
