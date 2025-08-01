import React from "react";

const TwitterSVG = ({
  fill = "#7D7C7C",
  width = 25,
  height = 24,
  onClick,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 8.00175C20.5 8.00117 20.5 8.00058 20.5 8C20.5 7.99994 20.5 7.99988 20.5 7.99982L22.375 5.97672C22.6807 5.64695 22.4058 5.11563 21.96 5.17458L19.6108 5.48528C18.8775 4.57926 17.7564 4 16.5 4C14.2909 4 12.5 5.79086 12.5 8C12.5 8.52744 12.6021 9.03104 12.7876 9.49212C9.79119 9.42205 6.58291 8.82913 4.96086 5.6154C4.76014 5.21773 4.18475 5.1947 4.05697 5.62143C2.88324 9.54144 4.94886 14.6347 9.49978 16C8.3645 17.11 5.44612 17.4114 3.05791 17.1927C2.59318 17.1502 2.30142 17.6796 2.66081 17.9773C4.66333 19.6361 7.44071 20 9.99986 20C16.4992 20 20.999 14.501 20.5 8.00175Z"
        fill={fill}
      />
    </svg>
  );
};

export default TwitterSVG;
