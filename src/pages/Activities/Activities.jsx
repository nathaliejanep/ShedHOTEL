// import React, { useContext } from 'react';
import { useState } from 'react';
import DynamicMenu from '../../components/DynamicMenu/DynamicMenu';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
// import { useLoaderData } from 'react-router-dom';
// import { Context } from '../../context/SeasonContext';

const Activities = () => {
  // const season = useLoaderData();
  // {winter ? <p>Winter</p> : <p>Summer</p>}
  // const { winter } = useContext(Context);

  const activities = [
    'Hotel Happenings',
    'Wine & Dine',
    'Lorem Ipsum',
    'Lorem Ipsum2',
  ];

  // console.log(active);
  return (
    <div>
      <section>
        <h1>Explore</h1>
        <p>
          About experience. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor eos, laudantium, repudiandae obcaecati cupiditate officia,
          cum odit laboriosam quae in temporibus consectetur? Sed sit suscipit
          enim quis fugiat aspernatur ullam!
        </p>
        <SeasonPicker />

        <DynamicMenu items={activities} />
        {/* <div id="contains">{selectedTab()}</div> */}
      </section>
    </div>
  );
};

export default Activities;
