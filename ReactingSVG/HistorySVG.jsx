import React from "react";

const HistorySVG = ({
  fill = "#fff",
  width = 22,
  height = 22,
  onClick,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
      className={className}
    >
      <path
        id="history_icon"
        d="M472.008,3859H472a11.03,11.03,0,0,1-6.9-2.435,1.064,1.064,0,0,1-.081-1.58l.5-.5a1.067,1.067,0,0,1,.76-.316,1.042,1.042,0,0,1,.655.228A8.079,8.079,0,0,0,472,3856.16a8.161,8.161,0,1,0-5.592-14.108l2.251,2.252a.71.71,0,0,1-.5,1.211h-6.448a.71.71,0,0,1-.709-.71v-6.448a.708.708,0,0,1,1.211-.5l2.191,2.19A10.995,10.995,0,1,1,472.008,3859Zm2.126-7.115a1.06,1.06,0,0,1-.653-.224l-2.9-2.257v-6.017a1.065,1.065,0,0,1,1.064-1.064h.71a1.065,1.065,0,0,1,1.064,1.064v4.628l1.805,1.4a1.067,1.067,0,0,1,.187,1.495l-.436.56A1.06,1.06,0,0,1,474.134,3851.884Z"
        transform="translate(-461 -3837)"
        fill={fill}
      />
    </svg>
  );
};

export default HistorySVG;
