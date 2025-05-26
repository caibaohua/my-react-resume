// src/components/Skills.js
import React from "react";

function Skills({ technicalSkills, professionalSkills }) {
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <h3 class="section-item-title">Technical</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {technicalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 class="section-item-title">Professional</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
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
