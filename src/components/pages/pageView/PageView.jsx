import React, { useState } from "react";
import { Outlet } from "react-router";
import navLink from "../../../data/siteData.js";
import { useLocation } from "react-router";
import BackButton from "../../global/backButton/BackButton.jsx";
import styles from "./PageView.module.css";

function PageView() {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();
  const [currentPage] = navLink.filter((item) => item.to === pathname);
  const titleArr = currentPage.title.split(" ");
  const lastIndex = titleArr.length - 1;
  let isActive = !isHovered;

  return (
    <>
      <div className="min-h-screen p-6 md:p-10 lg:p-16">
        <div className="relative max-w-4xl mx-auto">
          <BackButton
            theme={currentPage.theme}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            isActive={isActive}
          />
          <span
          className={`${styles.letter}`}
          style={{ color: `rgb(var(--${currentPage.theme}))` }}
        >
          {currentPage.page[0].toUpperCase()}
        </span>
          <div className="mt-12 space-y-12">
            <div
              className="space-y-4 -up relative"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold relative z-10">
                {titleArr.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="capitalize"
                      style={
                        index === lastIndex
                          ? { color: `rgb(var(--${currentPage.theme}))` }
                          : null
                      }
                    >
                      {item}
                      {index !== lastIndex && " "}
                    </span>
                  );
                })}
              </h1>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageView;
