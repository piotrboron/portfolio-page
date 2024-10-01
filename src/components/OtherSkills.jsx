import React from "react";

export default function OtherSkills() {
  const otherSkills = [
    {
      id: 1,
      name: "Adobe Photoshop",
      description:
        "Experience in creating and editing graphics for social media and print.",
    },
    {
      id: 2,
      name: "Git",
      description:
        "Basic understanding of version control using Git for collaborative projects.",
    },
    {
      id: 3,
      name: "MySQL/MariaDB",
      description:
        "Basic knowledge and understanding of MySQL database management topic.",
    },
    {
      id: 4,
      name: "SEO",
      description: "I have a basic knowledge of search engine optimization.",
    },
    {
      id: 5,
      name: "AI Tools",
      description:
        "I use AI every day to speed up my work, clarify some topics and for graphic design.",
    },
    {
      id: 6,
      name: "Video editing",
      description:
        "I have sufficient video editing skills aimed at social media and my own small projects.",
    },
    {
      id: 7,
      name: "Shell usage",
      description:
        "I use the terminal on a daily basis, it doesn't scare me and sometimes I find it more convenient than the GUI.",
    },
    {
      id: 8,
      name: "Cloud servers",
      description:
        "I've used cloud servers from AWS, Google and Oracle to host sites, game servers and more. ",
    },
    {
      id: 9,
      name: "Networking",
      description: "Basic knowledge of how the network works.",
    },
    {
      id: 10,
      name: "cTrader/MetaTrader",
      description:
        "I have the skills to fluently use the trading software mentioned above.",
    },
    {
      id: 11,
      name: "Wordpress, Woocommerce",
      description:
        "Ability to create blogs and online stores with the help of Wordpress as well as understanding it.",
    },
    {
      id: 12,
      name: "theforgottenserver, zNoteAAC, RME",
      description: "I have skills in game development based on Open Tibia.",
    },
    {
      id: 13,
      name: "Apache/nginx",
      description: "Basic knowledge in the use of Apache and nginx servers.",
    },
    {
      id: 14,
      name: "APIs",
      description:
        "Basic knowledge in using external APIs as well as creating my own.",
    },
    {
      id: 15,
      name: "PostgreSQL",
      description: "Basic knowledge of database management in PostgreSQL.",
    },
    {
      id: 16,
      name: "EJS",
      description: "Basic knowledge of using EJS in Node.js projects.",
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
