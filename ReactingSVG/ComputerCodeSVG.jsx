import * as React from "react";
const SVGComponent = (props) => (
  <svg
    className="w-10 sm:w-12 w-10 sm:h-12"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33 44.8125H15M33.1875 14.7188L36.8641 18.3866C37.962 19.4812 37.962 21.2558 36.8641 22.3504L33.1875 25.9688M15 14.7188L11.3234 18.3866C10.2255 19.4812 10.2255 21.2558 11.3234 22.3504L15 25.9688M21.9375 27.8438L26.25 12.8438M46.125 12.5625V27.9375C46.125 33.1151 41.9276 37.3125 36.75 37.3125H11.248C6.07144 37.3125 1.875 33.1161 1.875 27.9395V12.5625C1.875 7.38487 6.07237 3.1875 11.25 3.1875H36.75C41.9276 3.1875 46.125 7.38487 46.125 12.5625Z"
      stroke="white"
      strokeWidth={2.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
