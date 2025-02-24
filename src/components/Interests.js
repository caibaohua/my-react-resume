// src/components/Interests.js
import React from "react";

function Interests({ interests }) {
  return (
    <section>
      <h2 className="section-title">Interests</h2>
      <ul>
        {interests.map((interest, idx) => (
          <li key={idx}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}

export default Interests;
