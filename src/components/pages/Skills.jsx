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
          <div className="advanced">
            <span style={{ color: `rgb(var(--${currentPage.theme}))` }}>
              Advanced
            </span>
            {skillData.skills.listItems
              .filter((item) => item["advanced"])
              .map((item) =>
                item["advanced"].map((skill) => (
                  <Progress
                    skill={skill.name}
                    percentage={skill.percentage}
                    theme={currentPage.theme}
                  />
                )),
              )}
          </div>
          <div className="proficient">
            <span
              style={{
                color: `rgb(var(--${currentPage.theme}))`,
                marginTop: "50px",
                display: "block",
              }}
            >
              Proficient
            </span>
            {skillData.skills.listItems
              .filter((item) => item["proficient"])
              .map((item) =>
                item["proficient"].map((skill) => (
                  <Progress
                    skill={skill.name}
                    percentage={skill.percentage}
                    theme={currentPage.theme}
                  />
                )),
              )}
          </div>
          <div className="workingKnowledge">
            <span
              style={{
                color: `rgb(var(--${currentPage.theme}))`,
                marginTop: "50px",
                display: "block",
              }}
            >
              Working Knowledge
            </span>
            {skillData.skills.listItems
              .filter((item) => item["workingKnowledge"])
              .map((item) =>
                item["workingKnowledge"].map((skill) => (
                  <Progress
                    skill={skill.name}
                    percentage={skill.percentage}
                    theme={currentPage.theme}
                  />
                )),
              )}
          </div>
        </div>
      </div>
      <div>
        <div
          className="p-6 rounded-2xl"
          style={{ backgroundColor: `rgb(var(--${currentPage.theme})/10%)` }}
        >
          <div className="mb-8">
            <h2
              className="text-2xl font-display font-semibold mb-5"
              style={{ color: `rgb(var(--${currentPage.theme}))` }}
            >
              {skillData.tools.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillData.tools.skillsTags.map((item) => (
                <Tags key={item} name={item} theme={currentPage.theme} />
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-display font-semibold mb-5"
              style={{ color: `rgb(var(--${currentPage.theme}))` }}
            >
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
                  <span style={{ color: `rgb(var(--white)/60%)`, fontWeight: 300, fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
