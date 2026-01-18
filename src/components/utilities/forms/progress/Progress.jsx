import React from "react";

function Progress({skill, percentage, theme}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill}</span>
        <span className="text-rgb(var--muted) text-sm">{`${percentage}%`}</span>
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
