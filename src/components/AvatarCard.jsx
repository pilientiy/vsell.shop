import React, { useState } from 'react';
import avatar from '../assets/Ellipse 109.png';
import activity from '../assets/Component 32.png';
import menu from '../assets/menu 12.png';
import verify from '../assets/verify 12.png';

const AvatarCard = () => {
  const [reversed, setReversed] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        {/* Avatar with activity icon */}
        <div className={`relative flex-shrink-0 ${reversed ? 'order-last' : ''}`}>
          <img
            src={avatar}
            alt="Profile Avatar"
            className="w-16 h-16 rounded-full"
          />
          {/* Activity icon positioned to the right of the avatar */}
          <div className="absolute top-11 left-10 flex items-center space-x-1">
            <img
              src={activity}
              alt="Activity Icon"
              className="w-6 h-6 border-2 border-white rounded-full"
            />
           
          </div>
        </div>

        {/* Text and icons */}
        <div className="flex-1 px-4 text-left">
          <div className="flex items-center space-x-2 justify-start">
            <span className="text-lg font-bold text-gray-800">Anna Effective</span>
            <img src={verify} alt="Verified Icon" className="w-4 h-4" />
          </div>
          <p className="text-sm text-gray-500">Double your income with me!</p>
        </div>

        {/* Menu icon */}
        <div className={`flex-shrink-0 ${reversed ? 'order-first' : ''}`}>
          <img
            src={menu}
            alt="Menu Icon"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setReversed(!reversed)} 
          />
        </div>
      </div>

      {/* Button to toggle order */}
      <div className="mt-4 text-center">
        <button
          onClick={() => setReversed(!reversed)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Toggle Order
        </button>
      </div>
    </div>
  );
};

export default AvatarCard;
