import React from "react";

export default function RatingBar({
  title = "",
  color = "#778BD6",
  value = 0,
  maxValue = 10,
  brrr = 24,
}) {
  return (
    <div>
      <span>
        <label style={{ color: "white" }}>{title}</label>
        {
          <div style={{ backgroundColor: "white", borderRadius: brrr }}>
            <div
              style={{
                height: 8,
                width: (value / maxValue) * 100 + "%",
                backgroundColor: color,
                borderRadius: brrr,
              }}
            ></div>
          </div>
        }
      </span>
    </div>
  );
}
