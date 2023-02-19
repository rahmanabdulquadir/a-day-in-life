import React from "react";

const SingleActivity = ({ activity, handleAddToList }) => {
  const { name, picture, about, time } = activity;
  return (
    <div className="card w-80 glass rounded-xl	">
      <figure>
        <img
          src={picture}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{about}</p>
        <p>Duration: {time} Min</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToList(activity)} className="btn btn-primary rounded-lg">Add To List</button>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
