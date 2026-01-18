import React, { useState, useRef, useEffect } from "react";
import Underline from "../global/underline/Underline";
import navLink from "../../data/siteData";
import NavCard from "../global/navCard/NavCard";

function Home() {
  const [hovered, setHovered] = useState(null);
  const [waveClass, setWaveClass] = useState("wave");

  useEffect(() => {
    const timer = setTimeout(() => setWaveClass(null), 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-screen p-6 md:p-10 lg:p-16">
      <div className="lg:col-span-1 flex flex-col justify-center lg:pr-8">
        <div className="space-y-6">
          <div className="space-y-5">
            <p
              className="paragraph"
              onMouseOver={() => setWaveClass("wave")}
              onMouseLeave={() => setWaveClass(null)}
            >
              <span className={waveClass}>👋</span>
              <span className="ml-2">Hello I'm</span>
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-20 font-display font-medium mb-5 inline-block"
              onMouseOver={() => setWaveClass("wave")}
              onMouseLeave={() => setWaveClass(null)}
            >
              Rajat Gulati
            </h1>
            <div className="relative w-48">
              <Underline width={110} />
              <span className="absolute text-xl paragraph right-0 -top-3"> & I 'm a</span>
            </div>
          </div>
        </div>
        <p className="text-xl md:text-2xl font-display mt-15 font-normal">
          Front-end UI Developer
          <span className="block">& Designer</span>
        </p>
        <p className="paragraph mt-8">
          Crafting beautiful, interactive experiences with code and creativity.
          Explore my work and let's create something amazing together.
        </p>
      </div>
      <div className="nav lg:col-span-2 grid grid-cols-2 gap-4 md:gap-4">
        {navLink.map((item, index) => {
          return (
            <NavCard
              to={item.to}
              page={item.page}
              key={item.id}
              theme={item.theme}
              isActive={hovered === index}
              isDimmed={hovered !== null && hovered !== index}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
