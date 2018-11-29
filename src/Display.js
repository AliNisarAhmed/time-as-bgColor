import React from "react";

function Display({ color, hours, minutes, seconds, formatTime, colorFormat }) {
  return (
    <div className="display" style={{ backgroundColor: color }}>
      <div className="colorFormat">{colorFormat}</div>
      <div>
        <span className="time">{formatTime(hours)}</span>
        <span className="units">HRS</span>
        <span className="colon">:</span>
        <span className="time">{formatTime(minutes)}</span>
        <span className="units">MIN</span>
        <span className="colon">:</span>
        <span className="time">{formatTime(seconds)}</span>
        <span className="units">SEC</span>
      </div>
    </div>
  );
}

export default Display;
