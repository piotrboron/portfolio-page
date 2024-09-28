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
            <p>
              Over 14 years of extensive experience utilizing Windows for
              various projects && personal tasks.
            </p>
          </div>
          <div class="skill-item">
            <i class="fa fa-linux fa-2x"></i>
            <h3>Linux / BSD</h3>
            <p>
              Proficient in Linux systems with several years of experience,
              primarily in web and game server management.
            </p>
          </div>
          <div class="skill-item">
            <i class="fa fa-apple fa-2x"></i>
            <h3>macOS</h3>
            <p>
              Utilized macOS daily for four years, with a strong preference
              alongside Windows for development and design tasks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
