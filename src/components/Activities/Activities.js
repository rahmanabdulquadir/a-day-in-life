import React, { useEffect, useState } from "react";
import SingleActivity from "../SingleActivity/SingleActivity";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("./activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-span-4 grid grid-cols-3 gap-3">
      {activities.map((activity) => (
        <SingleActivity
        activity={activity}
        key={activity.id}
        ></SingleActivity>
      ))}
    </div>
  );
};

export default Activities;
