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
          projectdescription="Mythoria is an MMORPG game based on solid foundations like Tibia, theforgottenserver and OTClientv8, combining classic concepts from 2007 with modern setting and solutions."
          technologies={mythoriaTechnologies}
          projectlink="https://github.com/piotrboron/mythoria"
        ></SingleProject>
        <SingleProject
          image={pr1}
          projecttitle="Fiverr"
          projectdescription="For four years I have been freelancing on Fiverr for cryptocurrency projects, consulting and configuring cryptocurrency mining farms to maximize their efficiency."
          technologies={fiverrTechnologies}
          projectlink="https://github.com/piotrboron/freelancing-activity/tree/main"
        ></SingleProject>
        <SingleProject
          image={pr4}
          projecttitle="A book about cryptocurrencies"
          projectdescription="In 2023, I wrote a guide in the form of a book on the topic of creating cryptocurrency tokens, meme-coins and the general topic of how the cryptocurrency system works."
          technologies={booktechnologies}
          projectlink="https://www.amazon.pl/Your-own-token-cryptocurrencies-visionaries/dp/8396907021/ref=sr_1_2?__mk_pl_PL=ÅMÅŽÕÑ&crid=3EB1DFJYKN40N&dib=eyJ2IjoiMSJ9.pSyDPB8Ot3QxqGZmQXlMsfYokAbKMFg9bGGSsdr7PrtW7WuRbAXBzr_GiY3k-0m3bkD4OSBAV63vd2hcYq2Dv7FYxqDPE1uRg_a9bIpkKCxSCexVvi-bdWJJrW_2JmE2YntC6x86TaDaaZDUfLbJhO54gjagpSBtAizZ8RH9-KDoaDNoj-mh6nvriCLW3Nq9NdKCh-L8HweLkhlMUMxM4E8dMfR_sy1NeH6kqPCj65c.TRVBMDtAxhG391bhpiN4yr8LSx1cD9xYLnaL7nodAMI&dib_tag=se&keywords=piotr+boroń&qid=1727464338&sprefix=piotr+boro%2Caps%2C136&sr=8-2"
        ></SingleProject>
        <SingleProject
          image={pr5}
          projecttitle="Trading Indicators"
          projectdescription="Year ago I ran an online store that allowed me to monetize my interest in the topic of crypto and trading. Trading indicators, strategies, my original book on creating cryptocurrencies."
          technologies={rosealgotechnologies}
          projectlink="https://github.com/piotrboron/tradingindicators"
        ></SingleProject>
        <SingleProject
          image={pr6}
          projecttitle="ImgResizer"
          projectdescription="I needed a service that optimizes images in bulk, due to the slow performance and the limits of the competition, I decided to write it myself as a consolidation of knowledge from the course."
          technologies={imgresizertechnologies}
          projectlink="https://github.com/piotrboron/imgresizer"
        ></SingleProject>
        <SingleProject
          image={pr3}
          projecttitle="CryptoStakingScripts"
          projectdescription="This is the site where I share the ready-made packages I once created to host my staking farms. Some pieces of this code are still used today on various platforms."
          technologies={cryptostakingscriptsTechnologies}
          projectlink="https://crypto-staking-scripts.com"
        ></SingleProject>
      </div>
    </>
  );
}
