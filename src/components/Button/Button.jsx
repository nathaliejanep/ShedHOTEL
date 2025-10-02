import React from 'react';
import './Button.scss';
import { mewsReserveLink } from '../../utils/config';

const Button = () => {
  return (
    <a
      href={mewsReserveLink}
      target='_blank'
      rel='noopener noreferrer'
      className='green-btn'
    >
      Reserve
    </a>
  );
};

export default Button;
