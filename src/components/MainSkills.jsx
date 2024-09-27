import React from "react";

export default function MainSkills() {
  const mainSkills = [
    {
      id: 1,
      name: "End-to-End Project Development",
      icon: "faicon fa fa-lightbulb-o",
      description:
        "Able to take an idea from concept to deployment, carefully managing each step to ensure a it's a well-rounded final product.",
    },
    {
      id: 2,
      name: "Game servers",
      icon: "faicon fa fa-server",
      description:
        "Administrating, managing, hosting and developing custom plugins and private servers across various games including GoldSrc, Source, SourceMod, AMX Mod X, Open Tibia, Minecraft, and Metin2",
    },
    {
      id: 3,
      name: "Cryptocurrency development",
      icon: "faicon fa fa-bitcoin",
      description:
        "Since 2020, I have implemented more than 60 tokens, many presales and several platforms for my clients while freelancing. I have also written a book on the subject.",
    },
    {
      id: 4,
      name: "Stocks / indices / FX / crypto trading",
      icon: "faicon fa fa-area-chart",
      description:
        "Years of experience in trading with over $50M in turnover since 2020.",
    },
    {
      id: 5,
      name: "Web development",
      icon: "faicon fa fa-html5",
      description:
        "Actively enhancing my web development skills, currently learning the PERN stack, and aspiring to become a full stack developer.",
    },
    {
      id: 6,
      name: "AI Tools",
      icon: "faicon fa fa-terminal",
      description:
        "I use AI tools daily, including v0, ChatGPT, Cursor, and Midjourney, as they significantly speed up various processes.",
    },
  ];
  return (
    <>
      <div className="skills">
        <h2 class="gradiently">Main skills</h2>
        <div className="skills-container">
          {mainSkills.map((skill) => (
            <div className="skill" key={skill.name}>
              <i className={`${skill.icon} fa-3x`}></i>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
