import React from "react";
import { Link } from "react-router";

function BackButton({ theme, isActive, onMouseOver, onMouseLeave }) {
  const themeClass = {
    themeColor: `rgb(var(--black))`,
    themeBg1: `rgb(var(--${theme})/0.9)`,
    themeBg2: `rgb(var(--${theme}-20))`,
  };
  return (
    <Link to="/">
      <button
        style={
          isActive
            ? undefined
            : {
                borderColor: `transparent`,
                color: themeClass.themeColor,
                background: themeClass.themeBg1,
                boxShadow: `0 0 60px ${themeClass.themeBg1}`,
              }
        }
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={`relative inline-flex pr-4.5 rounded-xl font-medium hover:font-semibold border border-[rgb(var(--black-25))] items-center gap-1 transition-all duration-300 group cursor-pointer hover:text-(--theme)`}
      >
        <div className="bg-transparent w-12 h-12 p-3 px-2 rounded-full flex place-content-center transition-all duration-300 group-hover:bg-amber-50 group-hover:-translate-x-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </div>
        <span className="">Back to Home</span>
      </button>
    </Link>
  );
}

export default BackButton;
