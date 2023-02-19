import React, { useEffect, useState } from "react";
import SingleActivity from "../SingleActivity/SingleActivity";

const Activities = ({ activities, addToList }) => {
  return (
    <div className="col-span-5 grid grid-cols-3 gap-y-5">
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
