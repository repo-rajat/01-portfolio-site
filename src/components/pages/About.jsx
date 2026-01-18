import React from "react";
import { useLocation } from "react-router";
import navLink from "../../data/siteData";
import ListsCard from "../utilities/cards/ListsCard";
import aboutData from "../../data/aboutData";

function About() {
  const { pathname } = useLocation();
  const [currentPage] = navLink.filter((item) => item.to === pathname);
  const [about] = aboutData;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div
        className="space-y-6 -up text-[rgb(var(--black-75))]"
        style={{ animationDelay: "0.2s" }}
      >
        {about.description.map((item) => (
          <p className="text-lg leading-relaxed">{item}</p>
        ))}
      </div>

      <div className="space-y-8  -up" style={{ animationDelay: "0.3s" }}>
        {about.card.map((item) => (
          <ListsCard card={item} theme={currentPage.theme} />
        ))}
      </div>
    </div>
  );
}

export default About;
