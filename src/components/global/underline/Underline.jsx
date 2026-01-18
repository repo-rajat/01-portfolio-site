import React from "react";
import './underline.css'

function Underline({width}) {
  return (
    <div className="underline h-1 rounded-full relative" style={{width: width}}>
      <div className="track">
        <div className="gradient"></div>
        <div className="gradient"></div>
      </div>
    </div>
  );
}

export default Underline;
