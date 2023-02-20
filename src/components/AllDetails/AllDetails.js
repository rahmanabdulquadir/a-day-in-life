import React, { useState } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './AllDetails.css'

const AllDetails = ({singleActivity}) => {

  const getTimeFromLs = () => {
    const storedTime = localStorage.getItem('break-time')
    return storedTime
  }
  const [addBreak, setAddBreak] = useState(getTimeFromLs())

  
  const handleAddToBreak = (time) => {
    localStorage.setItem('break-time', time);
    setAddBreak(time);
  }
  let totalTime = 0
  for(const act of singleActivity){
    totalTime = totalTime + parseInt(act.time)
    console.log(totalTime)
  }
  return (
    <div className='col-span-2 side-cart'>
      <PersonalInfo></PersonalInfo>
      <div className='mt-7 stick'>
        <h1 className='text-xl font-semibold'>Add a break</h1>
        <div className='flex justify-evenly bg-slate-200 py-8 px-14 rounded-md mt-3'>
          <h2 onClick={() => handleAddToBreak(10)} className='text-l mr-3 p-3 cursor-pointer	 bg-white rounded-full font-bold'>10m</h2>
          <h2 onClick={() => handleAddToBreak(20)} className='text-l mr-3 p-3 cursor-pointer	 bg-white rounded-full font-bold'>20m</h2>
          <h2 onClick={() => handleAddToBreak(30)} className='text-l mr-3 p-3 cursor-pointer	 bg-white rounded-full font-bold'>30m</h2>
          <h2 onClick={() => handleAddToBreak(40)} className='text-l mr-3 p-3 cursor-pointer	 bg-white rounded-full font-bold'>40m</h2>
          <h2 onClick={() => handleAddToBreak(50)} className='text-l  p-3 cursor-pointer	 bg-white rounded-full font-bold'>50m</h2>
        </div>
      </div>

      <div className='mt-12'>
        <h1 className='text-xl font-semibold text-center'>Spent Time Details</h1>
        <div>
          <div className='flex justify-between bg-slate-200 py-5 px-4  rounded-md mt-3'>
            <h1 className='text-l font-semibold'>Total time Spent</h1>
            <p>{totalTime} Min</p>
          </div>
          <div className='flex justify-between bg-slate-200 py-5 px-4 mt-3 rounded-md mt-3'>
            <h1 className='text-l font-semibold'>Break Time</h1>
            <p>{addBreak} Min</p>
          </div>
        </div>
      </div>
      <button className="btn btn-active w-full rounded-lg mt-7">Activity Completed</button>

    </div>
  );
};

export default AllDetails;