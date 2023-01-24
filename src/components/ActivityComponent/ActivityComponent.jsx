import axios from 'axios';
import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../../context/SeasonContext';
import './ActivityComponent.scss';

const ActivityComponent = ({ tab }) => {
  const { winter } = useContext(Context);
  const [data, setData] = useState([]);

  // console.log('data', data);
  // console.log('tab', tab);
  const getData = () => {
    axios
      .get('api/activities.json')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
    return;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {tab === 'Hotel Happenings' ? (
          <div>
            {winter ? (
              <section>
                {data?.winterActivities?.map((activity, i) => (
                  <div key={i}>
                    <h1>{activity.title}</h1>
                    <p>{activity.text}</p>
                    <div>
                      <img src={activity.imgUrl} alt={activity.title} />
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <section>
                {data?.summerActivities?.map((activity, i) => (
                  <div key={i}>
                    <h1>{activity.title}</h1>
                    <p>{activity.text}</p>
                    <img src={activity.imgUrl} alt={activity.title} />
                  </div>
                ))}
              </section>
            )}
          </div>
        ) : null}

        {tab === 'Wine & Dine' ? (
          <section>
            {data?.restaurants?.map((activity, i) => (
              <div key={i}>
                <h1>{activity.title}</h1>
                <p>{activity.text}</p>
                <img src={activity.imgUrl} alt={activity.title} />
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default ActivityComponent;
