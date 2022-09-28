import React from 'react';
import image from './img.jpg';

const Profile = ({ exerciseTime }) => {
  console.log(exerciseTime);
  return (
    <div>
      <div className="flex space-x-5 mt-10">
        <img className="w-14 h-14 rounded-full" src={image} alt="" />
        <div className="text-left">
          <h3>LH Fahim</h3>
          <p>
            <small>Dhaka, Bangladesh</small>
          </p>
        </div>
      </div>

      {/* info */}
      <div className="border flex space-x-10 mt-8 p-2 bg-slate-200 rounded-2xl">
        <p>
          66 KG <br /> weight
        </p>
        <p>
          5'5" <br />
          height
        </p>
        <p>
          23 years <br /> age
        </p>
      </div>

      {/* break */}
      <div className="mt-8">
        <h4 className="text-left mb-1 text-zinc-600">Add a break</h4>
        <div className="flex space-x-5 bg-slate-200 rounded-2xl p-2">
          <button className=" p-2 rounded-2xl text-white bg-purple-600">
            10s
          </button>
          <button className=" p-2 rounded-2xl text-white bg-purple-600">
            20s
          </button>
          <button className=" p-2 rounded-2xl text-white bg-purple-600">
            30s
          </button>
          <button className=" p-2 rounded-2xl text-white bg-purple-600">
            40s
          </button>
          <button className=" p-2 rounded-2xl text-white bg-purple-600">
            50s
          </button>
        </div>
      </div>

      {/* exercise details */}
      <div className="mt-8 text-left">
        <h4 className="mb-2">Exercise Details</h4>
        <div className="flex justify-between bg-slate-200 p-2 rounded-xl">
          <h4>Exercise time</h4>
          <p>{exerciseTime} mins</p>
        </div>
        <div className="flex justify-between bg-slate-200 p-2 rounded-xl mt-5">
          <h4>Break time</h4>
          <p>20 seconds</p>
        </div>
      </div>

      <button className="bg-purple-500 py-2 w-full mt-5 rounded-xl text-white font-bold">
        Activity Completed
      </button>
    </div>
  );
};

export default Profile;
