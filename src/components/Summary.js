// src/components/Summary.js
import React from "react";

function Summary({ summary }) {
  return (
    <section className="summary-section">
      <div className="summary-content">
        <div className="avatar">
          <img 
            src="/avatar-placeholder.jpg" 
            alt="Profile avatar" 
            className="avatar-image"
          />
        </div>
        <p style={{ lineHeight: "1.6" }}>{summary}</p>
      </div>
    </section>
  );
}

export default Summary;
