import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectView from "./ProjectView";
import projectsData from "../../../data/projectsData.js";

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((item) => {
          return (
            <>
              <ProjectCard
                key={item.id}
                title={item.title}
                tags={item.tags}
                description={item.description}
                thumbnail={item.thumbnail}
                onClick={() => setActiveProject(item)}
              />
            </>
          );
        })}
        {activeProject && <ProjectView url={activeProject.url} onClose={() => setActiveProject(null)} title={activeProject.title} />}
      </div>
    </>
  );
}

export default Portfolio;
