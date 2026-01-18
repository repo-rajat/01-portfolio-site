import React from "react";
import Tags from "../utilities/Tags";
import skills from "../../data/skillsData";
import Progress from "../utilities/forms/progress/Progress";
import { useLocation } from "react-router";
import navLink from "../../data/siteData";

function Skills() {
  const { pathname } = useLocation();
  const [currentPage] = navLink.filter((item) => item.to === pathname);
  const [skillData] = skills;
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8 -up">
        <div className="space-y-8">
          {skillData.skills.listItems.map((item) => (
            <Progress
              skill={item.name}
              percentage={item.percentage}
              theme={currentPage.theme}
            />
          ))}
        </div>
      </div>
      <div>
        <div
          className="p-6 rounded-2xl"
          style={{ backgroundColor: `rgb(var(--${currentPage.theme})/10%)` }}
        >
          <h2 className="text-2xl font-display font-semibold mb-5" style={{color: `rgb(var(--${currentPage.theme}))`}}>
            {skillData.tools.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillData.tools.skillsTags.map((item) => (
              <Tags key={item} name={item} theme={currentPage.theme} />
            ))}
          </div>
        </div>
        <div
          className="p-6 rounded-2xl mt-8"
          style={{ backgroundColor: `rgb(var(--${currentPage.theme})/10%)` }}
        >
          <h2 className="text-2xl font-display font-semibold mb-5" style={{color: `rgb(var(--${currentPage.theme}))`}}>
            {skillData.whatido.title}
          </h2>
          <ul className="space-y-2.5 text-muted-foreground">
            {skillData.whatido.listItems.map((item) => (
              <li className="flex items-start gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{
                    backgroundColor: `rgb(var(--${currentPage.theme}))`,
                  }}
                ></span>
                <span style={{ color: `rgb(var(--white)/50%)` }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
