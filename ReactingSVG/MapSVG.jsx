import React from "react";

const MapSVG = ({
  fill = "#0abead",
  width = 26,
  height = 36,
  onClick,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 35.999"
      onClick={onClick}
      className={className}
    >
      <path
        id="map_pin"
        // dataName="map pin"
        data-name="map pin"
        d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z"
        transform="translate(-621 -7348)"
        fill={fill}
      />
    </svg>
  );
};

export default MapSVG;
