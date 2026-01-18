import axios from 'axios';
import React from 'react';
import { useEffect, useContext, useState, useCallback } from 'react';
import { Context } from '../../context/SeasonContext';
import { LanguageContext } from '../../context/LanguageContext';
import './ActivityComponent.scss';

const ActivityComponent = ({ tab }) => {
  const { winter } = useContext(Context);
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    axios
      .get(`/api/activities.${language}.json`)
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
    <div>
      <>
        {tab === 'Explore' ? (
          <>
            {winter ? (
              <>
                {data?.winterActivities?.map((activity, i) => (
                  <section key={i} className="card">
                    <div className={`card__text winter ${activity.title}`}>
                      <h2>{activity.title}</h2>
                      <p>{activity.text}</p>
                    </div>
                    <div className="card__image">
                      <img src={activity.imgUrl} alt={activity.title} />
                    </div>
                  </section>
                ))}
              </>
            ) : (
              <>
                {data?.summerActivities?.map((activity, i) => (
                  <section key={i} className="card">
                    <div className={`card__text summer ${activity.title}`}>
                      <h2>{activity.title}</h2>
                      <p>{activity.text}</p>
                    </div>
                    <div className="card__image">
                      <img src={activity.imgUrl} alt={activity.title} />
                    </div>
                  </section>
                ))}
              </>
            )}
          </>
        ) : null}

        {tab === 'Wine & Dine' ? (
          <>
            {data?.restaurants?.map((restaurant, i) => (
              <section key={i} className="card">
                <div className={`card__text ${restaurant.title}`}>
                  <a href="https://shedburgers.ch/">
                    <h2>{restaurant.title}</h2>
                  </a>
                  <p>{restaurant.text}</p>
                </div>
                <div className="card__image">
                  <img src={restaurant.imgUrl} alt={restaurant.title} />
                </div>
              </section>
            ))}
          </>
        ) : null}
      </>
    </div>
  );
};

export default ActivityComponent;
