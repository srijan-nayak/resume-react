import React from "react";
import List from "./List";

import "./styles/ContentSection.css";

const ContentSection = () => {
  return (
    <div className="content-section">
      <section>
        <h2 className="section-heading">Summary</h2>
        <p>
          A computer engineering student focused on full stack web development
          and data science. Has experience building frontend web applications
          and making data analysis reports.
        </p>
      </section>
      <section>
        <h2 className="section-heading">Skills</h2>
        <div className="skill-lists">
          <List
            heading="Programming languages"
            elements={["Python", "JavaScript", "Dart", "R"]}
          />
          <List
            heading="Markup/Styling languages"
            elements={["HTML", "CSS", "Markdown", "LaTeX"]}
          />
          <List
            heading="Frameworks and Libraries"
            elements={["Flutter", "React", "Django", "Tidyverse"]}
          />
        </div>
      </section>
      <section>
        <h2 className="section-heading">Projects</h2>
        <div className="project-links">
          <span className="project-listing">
            <a href="https://github.com/srijan-nayak/p-a-m">
              Pixel Art Maker (P-A-M)
            </a>
            A pixel art maker.
          </span>
          <span className="project-listing">
            <a href="https://github.com/srijan-nayak/weather-fetcher">
              Weather Fetcher
            </a>
            A weather fetcher written in Python that uses the free MetaWeather
            API.
          </span>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
