import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../sassStyles/layouts/_terms-layout.scss';

const Policy = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('api/policies.json')
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
    return;
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="terms">
      <section className="terms__section">
        <h1>Shed. HOTEL POLICY</h1>

        <p>
          We strive to provide our guests with an exceptionally clean, safe, and
          friendly hotel experience. The following Hotel Policy/House Rules have
          been established based on industry standards, management and
          operational procedures, and our personal experience of owning and
          operating the Shed. HOTEL. These Hotel Policy/House Rules are
          considered a part of our reservation agreement with you. As our hotel
          guest, by reading and signing your hotel registration you are agreeing
          to abide by all of our Hotel Policy/House Rules, terms and conditions,
          and procedures. These Hotel Policy/House Rules are presented here to
          help promote our guests' safety and enjoyment and to ensure that each
          guest is aware of the understandings between the Shed. HOTEL and the
          guest.
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
