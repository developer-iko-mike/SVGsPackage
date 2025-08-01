import React from "react";

const UxDesignSVG = ({
  fill = "#fff",
  width = 72.977,
  height = 64.991,
  onClick,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 72.977 ${height}`}
      onClick={onClick}
      className={className}
    >
      <path
        id="icon"
        d="M660.989,2999H588.011v-46.615h42.336l15.233-18.375h15.408V2999Zm-26.882-18.669h0l3.489,6.324h4.891l-5.935-10.758,5.935-10.758H637.6l-3.49,6.325-3.49-6.325h-4.891l5.936,10.758-5.936,10.758h4.891l3.489-6.324Zm-28.479-15.118v13.411a7.911,7.911,0,1,0,15.821,0v-13.411h-4.276v13.411a3.635,3.635,0,1,1-7.269,0v-13.411Zm22.718-17.132H588.011v-14.072h52l-11.666,14.072h0Zm-13.066-9.271v4.331h4.28v-4.331Zm-9.19,0v4.331h4.28v-4.331Zm-9.19,0v4.331h4.28v-4.331Z"
        transform="translate(-588.011 -2934.009)"
        fill={fill}
      />
    </svg>
  );
};

export default UxDesignSVG;
