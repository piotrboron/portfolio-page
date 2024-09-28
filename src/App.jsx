import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSkills from "./components/MainSkills";
import WordCloud from "./components/WordCloud";
import Experience from "./components/Experience";
import MinorSkills from "./components/MinorSkills";
import OtherSkills from "./components/OtherSkills";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFreeCodeCamp, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faFreeCodeCamp, faGithub);
import Mycertifications from "./components/Mycertifications";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <MainSkills></MainSkills>
      <WordCloud></WordCloud>
      <MinorSkills></MinorSkills>
      <OtherSkills></OtherSkills>
      <Experience></Experience>
      <Mycertifications></Mycertifications>
    </>
  );
}

export default App;
