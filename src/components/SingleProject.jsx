import React from "react";
import "../singleproject.css";

export default function SingleProject(props) {
  return (
    <>
      <div class="project-card">
        <img src={props.image} alt={props.imagealt} class="project-image"></img>
        <div class="project-info">
          <h2 class="project-title">{props.projecttitle}</h2>
          <p class="project-description">{props.projectdescription}</p>
          <a href={props.projectlink}>
            <button>Read more</button>
          </a>
          <div class="project-tags">
            {props.technologies.map((tech, index) => (
              <span class="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
