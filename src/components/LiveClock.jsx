// src/components/LiveClock.jsx
import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right">
      <p className="text-gray-800 font-semibold text-sm">
        {time.toLocaleDateString()}
      </p>
      <p className="text-gray-500 text-xs">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default LiveClock;
