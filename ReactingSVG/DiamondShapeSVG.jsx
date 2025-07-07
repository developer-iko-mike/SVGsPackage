import React from 'react';

export default function DiamondShapeSVG({
  fill = "url(#a)",
  width = 24,
  height = 24,
  onClick,
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 128 128"
      viewBox="0 0 128 128"
      
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="64.054"
        x2="64.054"
        y1="25.4517"
        y2="104.0608"
      >
        <stop offset="0" stopColor="#ff4d4a" />
        <stop offset=".9693" stopColor="#e53935" />
      </linearGradient>
      <path
        d="m59.47 121.86-38.15-53.93c-1.67-2.41-1.85-5.2 0-7.86l38.15-53.93c2.21-3.32 6.82-3.25 9.07 0l38.15 53.93c1.95 2.49 1.86 5.45 0 7.86l-38.15 53.93c-2.37 3.1-6.79 3.01-9.07 0z"
        fill={fill}
      />
    </svg>
  );
}