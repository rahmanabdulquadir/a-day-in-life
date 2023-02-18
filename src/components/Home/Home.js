import React from 'react';
import Activities from '../Activities/Activities';
import AllDetails from '../AllDetails/AllDetails';

const Home = () => {
  return (
    <div className='grid grid-cols-5 mt-10'>
      <Activities></Activities>
      <AllDetails></AllDetails>
    </div>
  );
};

export default Home;