import React from "react";

export default function RatingBar({ title = "", value = 0, maxValue = 10 }) {
  return (
    <div>
      <span>
        <label style={{ color: "white" }}>{title}</label>
        if (({title} = "title"))
        {
          <div style={{ backgroundColor: "white" }}>
            <div
              style={{
                height: 8,
                width: (value / maxValue) * 100 + "%",
                backgroundColor: " red",
              }}
            ></div>
          </div>
        }
      </span>
    </div>
  );
}
