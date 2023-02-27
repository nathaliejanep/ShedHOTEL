import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import './Explore.scss';

const Explore = () => {
  const explore = ['Explore', 'Wine & Dine'];

  // console.log(active);
  return (
    <div className="container">
      <section className="container__section">
        <h1>Explore</h1>
        <p>
          Verbier's potential as a ski resort was not discovered until 1925 when
          a group of mountaineers hiked up 15km for the sole purpose of skiing
          back down again. Today, the place is one of the world's foremost
          freeride paradises, equally down to earth and out of this world.
          Explore the place where ski bums, families and celebs slalom, eat and
          paraglide in harmony.
        </p>
        <div className="season-section">
          <SeasonPicker />
        </div>
      </section>

      <DynamicMenu items={explore} />
    </div>
  );
};

export default Explore;
