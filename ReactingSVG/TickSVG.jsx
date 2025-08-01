import React from "react";

export default function TickSVG({
  fill = "#01A601",
  width = 24,
  height = 24,
  onClick,
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 109.76"
      style={{ enableBackground: "new 0 0 122.88 109.76" }}
      xmlSpace="preserve"
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <style type="text/css">
        {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:${fill};}`}
      </style>
      <g>
        <path
          className="st0"
          d="M0,52.88l22.68-0.3c8.76,5.05,16.6,11.59,23.35,19.86C63.49,43.49,83.55,19.77,105.6,0h17.28 C92.05,34.25,66.89,70.92,46.77,109.76C36.01,86.69,20.96,67.27,0,52.88L0,52.88z"
        />
      </g>
    </svg>
  );
}
