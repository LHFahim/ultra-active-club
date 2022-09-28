import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

// import sports from "sports.json";

const Dashboard = () => {
  const [sports, setSports] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  useEffect(() => {
    fetch('sports.json')
      .then(res => res.json())
      .then(data => setSports(data));
  }, []);

  const handleBtnClick = selectedSport => {
    setExerciseTime(exerciseTime + selectedSport.required_time);
  };

  return (
    <div className="flex">
      <section className="w-9/12">
        <div className="w-8/12 mx-auto mb-10">
          <Navigation />
          <h3 className="text-left text-zinc-500">Select Today's Exercises</h3>
        </div>

        {/* cards */}
        <div className="w-8/12 mx-auto grid grid-cols-3 gap-8">
          {sports.map(sport => (
            <Card
              key={sport.id}
              sport={sport}
              handleBtnClick={handleBtnClick}
            />
          ))}
        </div>
      </section>

      <section>
        <Profile exerciseTime={exerciseTime} />
      </section>
    </div>
  );
};

export default Dashboard;
