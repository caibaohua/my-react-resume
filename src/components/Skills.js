// src/components/Skills.js
import React from "react";

function Skills({ technicalSkills, professionalSkills }) {
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1" }}>
          <h3>Technical</h3>
          <ul>
            {technicalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1" }}>
          <h3>Professional</h3>
          <ul>
            {professionalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
