import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import './Activities.scss';

const Activities = () => {
  const activities = ['Activities', 'Wine & Dine'];

  // console.log(active);
  return (
    <div className="container">
      <section className="container__section">
        <h1>Explore</h1>
        <p>
          Savor delicious cuisine and explore the stunning beauty of Verbier.
          Whether you're a foodie or an adventure-seeker, this mountain
          destination has something for everyone. Book your trip now.
        </p>
        <div className="season-section">
          <SeasonPicker />
        </div>
      </section>

      <DynamicMenu items={activities} />
      {/* <div id="contains">{selectedTab()}</div> */}
    </div>
  );
};

export default Activities;
