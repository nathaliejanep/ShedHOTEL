import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
  const season = useLoaderData();
  return (
    <div>
      Faq<p>{season}</p>
    </div>
  );
};

export default Faq;
