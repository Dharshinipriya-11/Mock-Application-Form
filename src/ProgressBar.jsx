import React from 'react';
import './App.css';

const ProgressBar = ({ scoreName, percentage }) => {
  const fillStyle = {
    height: `${(percentage / 100) * 100}px`
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-label">{scoreName}</div>
      <div className="semi-circle">
        <div className="fill-mask">
          <div className="fill" style={fillStyle}></div>
        </div>
        <div className="inside-circle">{percentage}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;