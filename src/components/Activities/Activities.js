import React, { useEffect, useState } from "react";
import SingleActivity from "../SingleActivity/SingleActivity";

const Activities = ({activities, addToList}) => {
  return (
    <div className="col-span-4 grid grid-cols-3 gap-3">
      {activities.map((activity) => (
        <SingleActivity
        handleAddToList={addToList}
        activity={activity}
        key={activity.id}
        ></SingleActivity>
      ))}
    </div>
  );
};

export default Activities;
