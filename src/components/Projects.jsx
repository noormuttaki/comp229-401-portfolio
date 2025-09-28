import React from "react";
import "./Projects.css";

const featuredSites = [
  {
    id: 1,
    title: "Personal Student Portfolio",
    url: "http://studentweb.cencol.ca/nmuttaki/",
    description: "A showcase of my early web development projects built during my studies.",
  },
  {
    id: 2,
    title: "HTML & CSS Assignment",
    url: "http://studentweb.cencol.ca/nmuttaki/assignment2.html",
    description: "A clean, responsive webpage created as part of coursework.",
  },
  {
    id: 3,
    title: "Work Safety Website",
    url: "https://workssafety.com/",
    description: "A professional ecommers website for a safety shoe store.",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>
          Here’s a selection of my featured work and additional projects in web
          development, data, and beyond.
        </p>
      </header>

      {/* Featured Work */}
      <section className="featured-projects">
        <h2>Featured Work</h2>
        <div className="site-grid">
          {featuredSites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="site-card"
            >
              <h3>{site.title}</h3>
              <p>{site.description}</p>
              <span className="visit-link">Visit →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Other Projects & Skills */}
      <section className="other-projects">
        <h2>Other Projects & Skills</h2>
        <p>
          Beyond my featured work, I have built several smaller projects such as{" "}
          <strong>online photo galleries</strong>, a{" "}
          <strong>multiplication table generator</strong>, a{" "}
          <strong>butterfly catcher game</strong>, an{" "}
          <strong>online timer</strong>, and more.
        </p>
        <p>
          You can explore my full code base and repositories here:{" "}
          <a
            href="https://github.com/noormuttaki?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            GitHub Repositories →
          </a>
        </p>
        <p>
          I also bring strong experience in{" "}
          <strong>SQL, Pandas, and Power BI</strong>, along with a wide range of
          web development and data analysis tools, as reflected in my resume.
        </p>
      </section>
    </div>
  );
}

export default Projects;
