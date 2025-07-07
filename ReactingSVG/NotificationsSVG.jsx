import React from "react";

export default function NotificationsSVG({
  fill = "#010101",
  width = 16,
  height = 16,
  onClick,
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      className={`svg-icon ${className}`}
      style={{
        width: { width },
        height: { height },
        verticalAlign: "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <path
        d="M512 938.666667c47.146667 0 85.333333-38.186667 85.333333-85.333334h-170.666666c0 47.146667 38.186667 85.333333 85.333333 85.333334z m256-256V469.333333c0-131.2-69.76-240.64-192-269.653333V170.666667c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64v29.013333c-122.24 29.013333-192 138.453333-192 269.653333v213.333334l-85.333333 85.333333v42.666667h682.666666v-42.666667l-85.333333-85.333333z"
        fill={fill}
      />
    </svg>
  );
}
