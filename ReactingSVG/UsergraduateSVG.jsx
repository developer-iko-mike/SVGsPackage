import React from "react";

const UsergraduateSVG = ({
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
      viewBox="0 0 22 21.999"
      onClick={onClick}
      className={className}
    >
      <path
        id="Icon_awesome-user-graduate"
        data-name="Icon awesome-user-graduate"
        d="M463.357,3794a2.225,2.225,0,0,1-2.357-2.062v-.412c0-3.1,2.8-5.615,6.315-5.748l4.685,4.1,4.686-4.1c3.511.133,6.315,2.646,6.315,5.748v.412a2.225,2.225,0,0,1-2.358,2.062Zm2.358-15.124a4.918,4.918,0,0,1,.687-2.449l-3.241-.683V3778a.935.935,0,0,1,.045,1.718l.766,2.677a.45.45,0,0,1-.373.6h-2.053a.451.451,0,0,1-.373-.6l.766-2.677a.934.934,0,0,1,.044-1.718v-2.51l-.314-.064c-.888-.189-.888-1.169,0-1.358l9.36-1.973a4.839,4.839,0,0,1,1.95,0l9.349,1.977c.894.189.894,1.165,0,1.354l-4.728,1a4.87,4.87,0,0,1,.687,2.449c0,3.038-2.814,5.5-6.286,5.5S465.714,3781.912,465.714,3778.875Z"
        transform="translate(-461 -3772)"
        fill={fill}
      />
    </svg>
  );
};

export default UsergraduateSVG;
