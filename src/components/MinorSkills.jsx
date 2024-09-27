import React from "react";

export default function MinorSkills() {
  return (
    <>
      <section class="minor-skills-section">
        <h2 class="gradiently">Operating systems I worked on</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <i class="fa fa-windows fa-2x"></i>
            <h3>Windows</h3>
            <p>I used this system for at least 14 years of my life.</p>
          </div>
          <div class="skill-item">
            <i class="fa fa-linux fa-2x"></i>
            <h3>Linux / BSD</h3>
            <p>
              I've been using Linux for several years sometimes occasionally,
              sometimes daily. Mainly for web and game servers. I am not afraid
              of the terminal.
            </p>
          </div>
          <div class="skill-item">
            <i class="fa fa-apple fa-2x"></i>
            <h3>macOS</h3>
            <p>
              Used on a daily basis for three years. It is close to my heart on
              par with Windows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
