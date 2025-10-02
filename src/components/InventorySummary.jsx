import React from "react";

const InventorySummary = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-bold mb-3">Inventory Summary</h2>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-semibold">{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventorySummary;
