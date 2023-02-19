import React from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const AllDetails = ({singleActivity}) => {
  let totalTime = 0
  for(const act of singleActivity){
    totalTime = totalTime + parseInt(act.time)
    console.log(totalTime)
  }
  return (
    <div>
      <PersonalInfo></PersonalInfo>
      <h1>This is details component : {totalTime}</h1>
    </div>
  );
};

export default AllDetails;