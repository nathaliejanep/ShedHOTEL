import React from 'react';
import DynamicMenu from '../../components/DynamicMenu/DynamicMenu';
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
      <section className="container_section">
        <h1>Explore</h1>
        <p>
          About experience. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor eos, laudantium, repudiandae obcaecati cupiditate officia,
          cum odit laboriosam quae in temporibus consectetur? Sed sit suscipit
          enim quis fugiat aspernatur ullam!
        </p>
        <SeasonPicker />
      </section>

      <DynamicMenu items={activities} />
      {/* <div id="contains">{selectedTab()}</div> */}
    </div>
  );
};

export default Activities;
