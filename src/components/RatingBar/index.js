import React from "react";

export default function RatingBar({ title = "", value = 0, maxValue = 10 }) {
  return (
    <div>
      <label>{title}</label>

      <div style={{ backgroundColor: "white" }}>
        <div
          style={{
            height: 8,
            width: (value / maxValue) * 100 + "%",
            backgroundColor: "pink",
          }}
        ></div>
      </div>
    </div>
  );
}
