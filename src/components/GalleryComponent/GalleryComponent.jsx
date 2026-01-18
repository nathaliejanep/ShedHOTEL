import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext, useCallback } from 'react';
import './GalleryComponent.scss';
import { LanguageContext } from '../../context/LanguageContext';

const GalleryComponent = ({ tab }) => {
  const [data, setData] = useState([]);
  const { language } = useContext(LanguageContext);

  const getData = useCallback(() => {
    axios
      .get(`/api/gallery.${language}.json`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [language]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="gallery-wrapper">
      {tab === 'Rooms' ? (
        <>
          {data?.rooms?.map((room, i) => (
            <div key={i} className="gallery-item">
              <img src={room.src} alt={room.alt} />
            </div>
          ))}
        </>
      ) : null}

      {tab === 'Hotel' ? (
        <>
          {data?.hotel?.map((room, i) => (
            <div key={i} className="gallery-item">
              <img src={room.src} alt={room.alt} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default GalleryComponent;
