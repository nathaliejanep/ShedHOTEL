import React from 'react';
import axios from 'axios';

const fetchData = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export default fetchData;
