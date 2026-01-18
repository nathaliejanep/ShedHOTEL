import React from 'react';
import './Banner.scss';

const Banner = () => {
  const fromDay = 'monday';
  const toDay = 'friday';
  const fromTime = '18:00';
  const toTime = 'LATE';
  const fromWeekend = 'saturday - sunday 12:00 - 14:30 / 18:00 - LATE';

  const bannerItems = Array(5).fill(null);

  return (
    <div className='banner'>
      <p className='banner__text'>
        {bannerItems.map((_, index) => (
          <React.Fragment key={index}>
            <span className='banner__day'>
              {'\u00A0\u00A0\u00A0'} {fromDay} - {toDay}: {fromTime} - {toTime}
              {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
              {fromWeekend}
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Banner;
