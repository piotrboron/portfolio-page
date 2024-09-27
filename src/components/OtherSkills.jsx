import React from "react";

export default function OtherSkills() {
  const otherSkills = [
    {
      id: 1,
      name: "Adobe Photoshop",
      description:
        "Experience in creating and editing graphics for web and print.",
    },
    {
      id: 2,
      name: "Git",
      description:
        "Proficient in version control using Git for collaborative projects.",
    },
    {
      id: 3,
      name: "MySQL/MariaDB",
      description: "",
    },
    {
      id: 4,
      name: "SEO",
      description: "Mam podstawową wiedzę na temat SEO.",
    },
    {
      id: 5,
      name: "AI Tools",
      description: "Na codzień korzystam z AI do przyspieszenia pracy.",
    },
    {
      id: 6,
      name: "Video editing",
      description: "Mam podstawowe umiejętności montażu video.",
    },
    {
      id: 7,
      name: "Shell",
      description: "Terminal nie jest mi straszny.",
    },
    {
      id: 8,
      name: "Cloud servers",
      description: "xxx",
    },
    {
      id: 9,
      name: "Networking",
      description: "xxx",
    },
    {
      id: 10,
      name: "cTrader/MetaTrader",
      description: "xxx",
    },
    {
      id: 11,
      name: "Wordpress, Woocommerce",
      description: "xxx",
    },
    {
      id: 12,
      name: "theforgottenserver, zNoteAAC, RME",
      description: "xxx",
    },
    {
      id: 13,
      name: "Apache/nginx",
      description: "xxx",
    },
    {
      id: 14,
      name: "API",
      description: "xxx",
    },
    {
      id: 15,
      name: "PostgreSQL",
      description: "xxx",
    },
    {
      id: 16,
      name: "EJS",
      description: "xxx",
    },
  ];
  return (
    <>
      <div className="skills">
        <h2 class="gradiently">Other skills</h2>
        <div className="otherskills-container">
          {otherSkills.map((skill) => (
            <div className="skill-box" key={skill.id}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
