import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex justify-start items-center">
        <img className=" rounded-3xl w-28 mr-4" src="https://avatars.githubusercontent.com/u/108421979?s=400&u=8775340035877c8e6e7fb020478e23ed9e308c85&v=4" alt="" />
        <div>
          <h2 className="text-xl font-semibold">Rahman Abdul Quadir</h2>
          <p>
            <small>Dhaka Bangladesh</small>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PersonalInfo;
