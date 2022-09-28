import React from "react";

const Card = () => {
  return (
    <div className="shadow-2xl bg-slate-200 p-2 rounded">
      <div>
        <div className="p-5">
          <img
            src="https://i.pinimg.com/originals/9e/f6/43/9ef6436039e36756cb65019cb8135c0b.jpg"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h4>Dumble</h4>
          <p>
            <small>Time required: 30s</small>
          </p>
          <button className="rounded-xl w-full bg-zinc-700 py-2 px-5 text-white">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
