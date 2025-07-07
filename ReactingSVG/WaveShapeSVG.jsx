import React from "react";
import "../landing/landing.css";

const waveShapeSVG = ({
  fill = "#0cbfae",
  width = "100vw",
  height = 300,
  onClick,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 2004.314 295.661"
      onClick={onClick}
      className={className}
    >
      <path
        id="Shape"
        d="M36.82,908.725s72.331,164.519,335.968,122.776,252.483-137.226,544.85-30.757,358.107,28.729,547.046-37.349,358.107,118.637,576.45,8.788c-.3,220.874,0,232.2,0,232.2L36.82,1201.005Z"
        transform="translate(-36.82 -908.725)"
        className="w100%"
        fill={fill}
      />
    </svg>
  );
};

export default waveShapeSVG;
