// src/components/Experience.js
import React from "react";

function Experience({ experiences }) {
  return (
    <section>
      <h2 className="section-title">Work Experiences</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="section-item">
          <h3 className="section-item-title">
            {exp.role}
          </h3>
          <div className="experience-dates">
            <span className="company-name">{exp.company}</span> | {exp.startDate} - {exp.endDate}
          </div>
          <p className="section-item-desc">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
