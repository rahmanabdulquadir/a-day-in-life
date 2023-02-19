import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex justify-start items-center">
        <img
          className=" rounded-3xl w-28 mr-4"
          src="https://avatars.githubusercontent.com/u/108421979?s=400&u=8775340035877c8e6e7fb020478e23ed9e308c85&v=4"
          alt=""
        />
        <div>
          <h2 className="text-xl font-semibold">Rahman Abdul Quadir</h2>
          <p>
            <small className="text-slate-400">Dhaka Bangladesh</small>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center rounded-md bg-slate-200 p-8 mt-7">
        <div>
          <h2 className="text-2xl">75kg</h2>
          <p>Weight</p>
        </div>
        <div>
          <h2 className="text-2xl">6.2ft</h2>
          <p>Height</p>
        </div>
        <div>
          <h2 className="text-2xl">22</h2>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
