import React from 'react';
import axios from 'axios';
const fetchData = () => {
  // axios get data from content.json
  const myData = function (data) {
    const name = data.name;
    console.log('name:', name);
    return name;
  };

  axios
    .get('https://api.github.com/users/social-collab')
    .then((response) => {
      const data = response.data;
      return data;
    })
    .then(myData)
    .catch((err) => {
      console.log('Error: ', err);
    });
  return <div>fetchData</div>;
};

export default fetchData;
