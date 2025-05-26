// src/components/Languages.js
import React from "react";
import RightColumnList from "./RightColumnList";

function Languages({ languages }) {
  return (
    <section>
      <h2 className="section-title">Languages</h2>
      <RightColumnList
        items={languages}
        renderItem={(lang) => `${lang.name} (${lang.level})`}
      />
    </section>
  );
}

export default Languages;
