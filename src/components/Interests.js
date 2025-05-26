// src/components/Interests.js
import React from "react";
import RightColumnList from "./RightColumnList";

function Interests({ interests }) {
  return (
    <section>
      <h2 className="section-title">Interests</h2>
      <RightColumnList
        items={interests}
        renderItem={(interest) => interest}
      />
    </section>
  );
}

export default Interests;
