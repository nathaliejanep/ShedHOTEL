import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import './Activities.scss';

const Activities = () => {
  const activities = [
    'Hotel Happenings',
    'Wine & Dine',
    'Lorem Ipsum',
    'Lorem Ipsum2',
  ];

  // console.log(active);
  return (
    <div className="container">
      <section className="container__section">
        <h1>Explore</h1>
        <p>
          About experience. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec elit ligula, laoreet et arcu at, dignissim blandit ligula.
          Suspendisse elementum tristique est, eget pulvinar tellus tristique
          at.
        </p>
        <SeasonPicker />
      </section>

      <DynamicMenu items={activities} />
      {/* <div id="contains">{selectedTab()}</div> */}
    </div>
  );
};

export default Activities;
