import React from "react";

function Tags({ name, theme }) {
  return (
    <span
      className="px-4 py-2 rounded-full font-medium text-sm"
      style={{ backgroundColor: `rgb(var(--${theme}) / 12%)` }}
    >
      {name}
    </span>
  );
}

export default Tags;
