import React from "react";

export default function basketSVG({
  fill = "#000000",
  width = 48,
  height = 48,
  onClick,
  className,
}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="basket"
    fill={fill}
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    >
      <path
        fill={fill}
        d="M26 22c.1 0 .5.3.6.6L28 26H15c-.8 0-2-1-2-2 0-.8 1-2 2-2h11m88 17c-1.3 4.3-9.7 24.5-12.5 31.3-1.2 2.8-1.9 4.6-2.2 5.2-.3.9-1 1.5-1.3 1.5H51.6c-.2-.1-.5-.3-.7-.4L36.4 39H114M26 18H15c-3.2 0-6 3-6 6 0 3.2 3 6 6 6h13.6l18.7 48.1c.5 1.3 2.2 2.5 3.4 2.7 0 0 .6.2 1.3.2h46c2.2 0 4.2-1.9 5-4 1.1-2.9 15-35.8 15-38s-1.8-4-4-4H36.1l-5.9-14.1C29.6 19.6 28 18 26 18z"
      />
      <path
        fill={fill}
        d="M49 89c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM102 89c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
      />
      <circle cx="49" cy="97" r="3" fill={fill} />
      <circle cx="102" cy="97" r="3" fill={fill} />
    </svg>
  );
}
