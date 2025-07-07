import React from 'react';

export default function DiamondShapeCardSVG({
  fill = "#fe0000",
  width = 24,
  height = 24,
  onClick,
  className,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 122.88 122.88"
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <title>playing-card-diamond-shape</title>
      <path
        style={{ fill: {fill}, fillRule: 'evenodd' }}
        d="M0,61.51A234.72,234.72,0,0,0,61.51,0a204.09,204.09,0,0,0,61.37,61.37,229.27,229.27,0,0,0-61.39,61.51A215.26,215.26,0,0,0,0,61.51Z"
      />
    </svg>
  );
}