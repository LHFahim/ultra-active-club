import React from "react";
import Card from "../Card/Card";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  return (
    <div className="flex">
      <section className="w-10/12">
        <div className="w-8/12 mx-auto mb-10">
          <Navigation />
          <h3 className="text-left text-zinc-500">Select Today's Exercises</h3>
        </div>

        <div className="w-8/12 mx-auto grid grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section>
        <Profile />
      </section>
    </div>
  );
};

export default Dashboard;
