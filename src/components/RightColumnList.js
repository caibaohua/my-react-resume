import React from "react";

function RightColumnList({ items, renderItem }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, idx) => (
        <li key={idx}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default RightColumnList; 