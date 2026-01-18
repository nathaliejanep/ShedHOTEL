import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './GalleryComponent.scss';

const GalleryComponent = ({ tab }) => {
  const { language } = useLanguage();
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`api/gallery.${language}.json`)
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
