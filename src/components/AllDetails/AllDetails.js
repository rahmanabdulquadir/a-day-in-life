import React from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const AllDetails = ({singleActivity}) => {
  let totalTime = 0
  for(const act of singleActivity){
    totalTime = totalTime + parseInt(act.time)
    console.log(totalTime)
  }
  return (
    <div className='col-span-2'>
      <PersonalInfo></PersonalInfo>
      <div className='mt-7'>
        <h1 className='text-xl font-semibold'>Add a break</h1>
        <div className='flex justify-evenly bg-slate-200 py-8 px-14 rounded-md mt-3'>
          <h2 className='text-l mr-3 p-3 bg-white rounded-full font-bold'>10m</h2>
          <h2 className='text-l mr-3 p-3 bg-white rounded-full font-bold'>20m</h2>
          <h2 className='text-l mr-3 p-3 bg-white rounded-full font-bold'>30m</h2>
          <h2 className='text-l mr-3 p-3 bg-white rounded-full font-bold'>40m</h2>
          <h2 className='text-l  p-3 bg-white rounded-full font-bold'>50m</h2>
        </div>
      </div>
      <h1>This is details component : {totalTime}</h1>
    </div>
  );
};

export default AllDetails;