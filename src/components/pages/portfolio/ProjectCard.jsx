import React, { useState } from "react";

function ProjectCard({ title, description, tags, thumbnail, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="peer group relative rounded-2xl overflow-hidden bg-[rgb(var(--black-50))] border border-[rgb(var(--black-25))] cursor-pointer -up hover:-translate-y-1 transition-all duration-300"
        onClick={onClick}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt="E-Commerce Dashboard"
            className="w-full h-full object-cover transition-all group-hover:scale-105 group-hover:blur-[2px] blur-[0] duration-400 ease-in-out"
          />
        </div>

        <div className="group-hover:top-0 top-1/4 absolute h-full bg-linear-to-t from-[rgb(var(--black)/0.9)] to-transparent inset-0 duration-400 ease-in-out" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-display font-semibold mb-1">{title}</h3>
          <p className="text-[rgb(var(--white)/0.6)] text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-10 transition-all duration-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-2">
        {tags.map((item, index) => {
          return (
            <span
              className="px-2.5 py-1.25 text-xs rounded-full text-[rgb(var(--white))] text-shadow-2xs transition-all duration-300"
              key={index}
              style={{ background : isHovered ? 'rgb(var(--mint)/1)' : 'rgb(var(--mint)/0.3)', color : isHovered ? 'rgb(var(--black)/1)' : 'rgb(var(--white)/0.8)'}}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
