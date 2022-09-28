import React from 'react';

const Card = ({ sport, handleBtnClick, msg }) => {
  // const [btnMessage, setBtnMessage] = useState('');
  const { img, name, required_time } = sport;

  return (
    <div className="shadow-2xl bg-slate-200 p-2 rounded">
      <div>
        <div className="p-5">
          <img src={img} alt="" />
        </div>
        <div className="space-y-2">
          <h4>{name}</h4>
          <p>
            <small>Time required: {required_time} mins</small>
          </p>
          <button
            onClick={() => handleBtnClick(sport, true)}
            className="rounded-xl w-full bg-zinc-700 py-2 px-5 text-white"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
