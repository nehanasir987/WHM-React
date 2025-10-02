// src/components/OverviewCard.jsx
import React from "react";

const OverviewCard = ({ title, value, time, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-transparent 
                    hover:border-blue-500 hover:shadow-xl 
                    hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default OverviewCard;
