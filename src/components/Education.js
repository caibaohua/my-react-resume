// src/components/Education.js
import React from "react";

function Education({ education }) {
  return (
    <section>
      <h2 className="section-title">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <h3 style={{ marginBottom: "0.2rem" }}>{edu.degree}</h3>
          <p style={{ margin: "0", fontStyle: "italic" }}>{edu.institution}</p>
          <p style={{ margin: "0 0 0.5rem" }}>{edu.date}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
