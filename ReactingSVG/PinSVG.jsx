import React from 'react';

export default function PinSVG({
  fill = "none",
  width = 50,
  height = 50,
  onClick,
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 508.901 508.901"
      xmlSpace="preserve"
      fill={fill}
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <g>
        <path
          style={{ fill: '#A31C09' }}
          d="M505.605,190.556c-13.789,13.789-66.887-16.949-118.599-68.661c-51.712-51.712-82.45-104.81-68.661-118.599s66.887,16.949,118.599,68.661S519.394,176.768,505.605,190.556"
        />
        <polygon
          style={{ fill: '#D9DBE8' }}
          points="0,508.9 112.358,346.605 162.295,396.543"
        />
        <path
          style={{ fill: '#CE3929' }}
          d="M387.007,121.894c-51.712-51.712-82.45-104.81-68.661-118.599c-49.991,49.991-39.23,123.065,12.482,174.777s121.671,65.589,171.652,15.607l-0.786-0.821C483.625,199.435,434.764,169.651,387.007,121.894"
        />
        <path
          id="SVGCleanerId_0"
          style={{ fill: '#A31C09' }}
          d="M342.08,279.177l58.606-58.606c-24.594-6.727-48.746-21.389-69.853-42.496c-21.116-21.116-35.257-45.789-41.366-70.991l-59.727,59.719l-48.719,48.719c6.118,25.212,22.581,47.554,43.697,68.661c21.107,21.116,44.067,36.97,68.661,43.697L342.08,279.177z"
        />
        <g>
          <path
            id="SVGCleanerId_0_1_"
            style={{ fill: '#A31C09' }}
            d="M342.08,279.177l58.606-58.606c-24.594-6.727-48.746-21.389-69.853-42.496c-21.116-21.116-35.257-45.789-41.366-70.991l-59.727,59.719l-48.719,48.719c6.118,25.212,22.581,47.554,43.697,68.661c21.107,21.116,44.067,36.97,68.661,43.697L342.08,279.177z"
          />
        </g>
        <path
          style={{ fill: '#CE3929' }}
          d="M311.324,389.978c2.348-21.486-1.607-44.226-11.829-68.22l-6.118,6.126c-24.594-6.735-47.554-22.59-68.661-43.697c-21.116-21.107-37.579-43.458-43.697-68.661l6.241-6.241l-0.274-0.282c-24.143-10.346-47.016-14.345-68.626-11.979c-40.157,4.378-64.071,45.877-47.634,82.785c12.509,28.072,35.566,60.734,66.322,91.489c30.746,30.747,63.417,53.813,91.489,66.313C265.438,454.048,306.937,430.134,311.324,389.978"
        />
      </g>
    </svg>
  );
}