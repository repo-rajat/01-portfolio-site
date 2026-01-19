import React from "react";

function Progress({skill, percentage, theme}) {
  return (
    <div className="space-y-2 mt-5">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `rgb(var(--${theme}) / 12%)`}}>
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%`, backgroundColor: `rgb(var(--${theme}))` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
