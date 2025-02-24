// src/components/Projects.js
import React from "react";

function Projects({ projects }) {
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      {projects.map((project, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem" }}>
          <h3 className="section-item-title">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007acc", textDecoration: "none" }}
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p style={{ lineHeight: "1.6" }}>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
