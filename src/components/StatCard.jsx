import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      <div className="text-3xl text-blue-600">{icon}</div>
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
