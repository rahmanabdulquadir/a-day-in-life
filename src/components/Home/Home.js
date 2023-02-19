import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import AllDetails from '../AllDetails/AllDetails';

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [singleActivity, setSingleActivity] = useState([]);
  useEffect(() => {
    fetch("./activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err));
  }, []);
  const addToList = (activity) => {
    const newActivity = [...singleActivity, activity];
    setSingleActivity(newActivity);
    // console.log(activity)
}
  return (
    <div className='grid grid-cols-7 justify-center mt-10'>
      <Activities addToList={addToList} activities={activities}></Activities>
      <AllDetails singleActivity={singleActivity}></AllDetails>
    </div>
  );
};

export default Home;