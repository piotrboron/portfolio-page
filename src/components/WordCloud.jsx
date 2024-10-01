import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const container = ".content";
const texts = [
  "HTML",
  "jQuery",
  "PineScript",
  "JS",
  "SQL",
  "CSS",
  "React",
  "Python",
  "C#",
  "Lua",
  "Skript",
  "C++",
  "Solidity",
  "Express",
  ".NET",
];
const options = {
  radius: 300,
  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true,
};

const WordCloud = () => {
  useEffect(() => {
    let tagCloudInstance = null;
    if (!tagCloudInstance) {
      tagCloudInstance = TagCloud(container, texts, options);
    }
    return () => {
      if (tagCloudInstance) {
        tagCloudInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      style={{
        placeContent: "center",
      }}
      className="main"
    >
      <h2 class="gradiently">Languages and frameworks I have dealt with</h2>
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
