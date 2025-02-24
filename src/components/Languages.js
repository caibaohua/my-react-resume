// src/components/Languages.js
import React from "react";

function Languages({ languages }) {
  return (
    <section>
      <h2 className="section-title">Languages</h2>
      <ul>
        {languages.map((lang, idx) => (
          <li key={idx}>
            {lang.name} ({lang.level})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
