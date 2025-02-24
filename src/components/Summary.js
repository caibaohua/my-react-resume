// src/components/Summary.js
import React from "react";

function Summary({ summary }) {
  return (
    <section>
      <h2 className="section-title">Profile Summary</h2>
      <p style={{ lineHeight: "1.6" }}>{summary}</p>
    </section>
  );
}

export default Summary;
