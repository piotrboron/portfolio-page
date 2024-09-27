import { useState } from "react";
import React from "react";
import SingleProject from "./SingleProject";
import pr1 from "../assets/pr1.webp";
import pr2 from "../assets/pr2.webp";
import pr3 from "../assets/pr3.webp";
import pr4 from "../assets/pr4.webp";
import pr5 from "../assets/pr5.webp";
import pr6 from "../assets/pr6.webp";

export default function Experience() {
  const mythoriaTechnologies = ["Lua", "VPS", "MySQL", "Apache"];
  const fiverrTechnologies = ["HTML", "CSS", "JS", "Solidity", "Web3.js"];
  const imgresizertechnologies = [
    "Node",
    "Express",
    "npm",
    "VPS",
    "CSS",
    "HTML",
    "JS",
  ];
  const booktechnologies = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Affinity Publisher",
    "Midjourney",
  ];
  const rosealgotechnologies = [
    "Wordpress",
    "PineScript",
    "C#",
    "Stripe",
    "SEO",
    "Woocommerce",
  ];
  const experienceItems = [
    {
      id: 1,
      title: "Fiverr",
      description:
        "Developed responsive web applications using React and TypeScript. Improved site performance by 30% through optimization techniques.",
      date: "2020-2024",
      modal: "Fiverr",
    },
    {
      id: 2,
      title: "A book about cryptocurrencies",
      description: "techniques.",
      date: "Mid 2023",
      modal: "Book",
    },
    {
      id: 3,
      title: "Mythoria MMORPG",
      description: "techniques.",
      date: "Late 2023",
      modal: "Mythoria",
    },
    {
      id: 4,
      title: "Smoczedrzewo.pl",
      description: "techniques.",
      date: "Late 2023",
      modal: "Smoczedrzewo",
    },
    {
      id: 5,
      title: "RoseAlgo",
      description: "techniques.",
      date: "Early 2024",
      modal: "Rosealgo",
    },
    {
      id: 6,
      title: "CryptoStakingScripts",
      description: "techniques.",
      date: "2024",
      modal: "Cryptostakingscripts",
    },
    {
      id: 7,
      title: "Minecraft plugin pack development",
      description: "techniques.",
      date: "2020-2024",
      modal: "Minecraft",
    },
  ];
  const cryptostakingscriptsTechnologies = [
    "Wordpress",
    "JS",
    "HTML",
    "CSS",
    "web3.js",
  ];

  return (
    <>
      <h2 class="gradiently">My projects</h2>
      <p style={{ textAlign: "center" }}>(Non-commercial)</p>
      <div className="timeline">
        <SingleProject
          image={pr2}
          projecttitle="Mythoria MMORPG"
          projectdescription="Mythoria is an MMORPG based on solid foundations like Tibia, theforgottenserver and OTClientv8, combining much-loved classic concepts into a modern setting and solutions. For me personally, it is also a kind of childhood dream come true."
          technologies={mythoriaTechnologies}
          projectlink="https://github.com/piotrboron/mythoria"
        ></SingleProject>
        <SingleProject
          image={pr1}
          projecttitle="Fiverr"
          projectdescription="This is a brief description of the awesome project. It showcases my
            skills in design and development."
          technologies={fiverrTechnologies}
          projectlink="https://github.com/piotrboron/freelancing-activity/tree/main"
        ></SingleProject>
        <SingleProject
          image={pr4}
          projecttitle="A book about cryptocurrencies"
          projectdescription="XDD"
          technologies={booktechnologies}
        ></SingleProject>
        <SingleProject
          image={pr5}
          projecttitle="Trading Indicators"
          projectdescription="In 2023 I ran an online store that allowed me to monetize my interest in the topic of crypto and trading indicators. You can find proprietary trading indicators, my original book on creating cryptocurrencies and free bases for creating trading bots for Spotware cTrader."
          technologies={rosealgotechnologies}
          projectlink="https://github.com/piotrboron/tradingindicators"
        ></SingleProject>
        <SingleProject
          image={pr6}
          projecttitle="ImgResizer"
          projectdescription="I needed a service that optimizes images in bulk, due to the slow performance and the limits of the competition, I decided to write such a service myself as a consolidation of knowledge from the course."
          technologies={imgresizertechnologies}
        ></SingleProject>
        <SingleProject
          image={pr3}
          projecttitle="CryptoStakingScripts"
          projectdescription="CryptoStakingScripts is a store that allows you to earn money by staking cryptocurrencies. You can find here staking pools for various cryptocurrencies, as well as my own staking pool for the RoseAlgo cryptocurrency."
          technologies={cryptostakingscriptsTechnologies}
          projectlink="https://crypto-staking-scripts.com"
        ></SingleProject>
      </div>
    </>
  );
}
