import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Policy.scss';

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
    <div className="policy">
      <section>
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
          help promote our guests’ safety and enjoyment and to ensure that each
          guest is aware of the understandings between the Shed. HOTEL and the
          guest.
        </p>
      </section>
      <div>
        {data?.policies?.map((policy, i) => (
          <div key={i}>
            <h3>{policy.title}</h3>
            <p>{policy.text}</p>
          </div>
        ))}
        {/* {data?.policy?.map((policy, i) => (
        <div key={i}>
            <h2>{policy.title}</h2>
            <p>{policy.text}</p> */}
      </div>
    </div>
  );
};

export default Policy;
