// src/components/Experience.js
import React from "react";

function Experience({ experiences }) {
  return (
    <section>
      <h2 className="section-title">Work Experiences</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.2rem" }}>
            {exp.role} | {exp.company}
          </h3>
          <p style={{ fontStyle: "italic", margin: "0 0 0.5rem" }}>
            {exp.startDate} - {exp.endDate}
          </p>
          <p style={{ lineHeight: "1.6" }}>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
