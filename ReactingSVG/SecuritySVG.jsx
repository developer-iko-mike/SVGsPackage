import * as React from "react";
const SVGComponent = (props) => (
  <svg
    className="w-10 sm:w-12 w-10 sm:h-12"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_135_44863)">
      <mask
        id="mask0_135_44863"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}
      >
        <path d="M48 0H0V48H48V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_135_44863)">
        <mask
          id="mask1_135_44863"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={48}
          height={48}
        >
          <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask1_135_44863)">
          <path
            d="M42.9536 13.0656C42.93 12.5461 42.9167 12.0367 42.9092 11.5333C42.8808 9.61376 41.3707 8.04729 39.454 7.94022C33.5919 7.61276 29.0073 5.66285 25.1349 1.88838C24.4869 1.29438 23.515 1.29438 22.867 1.88838C18.9945 5.66285 14.41 7.61276 8.54786 7.94022C6.63114 8.04729 5.12102 9.61376 5.09252 11.5332C5.08511 12.0367 5.0718 12.5461 5.04817 13.0656C4.83274 24.3778 4.50977 39.8814 23.3253 46.4423C23.4152 46.4737 23.5077 46.4988 23.6011 46.5174L23.602 46.5176C23.8654 46.5702 24.1364 46.5702 24.3998 46.5176C24.4937 46.4988 24.5869 46.4735 24.6774 46.4419C43.4383 39.881 43.1691 24.4314 42.9536 13.0656Z"
            stroke="white"
            strokeWidth={2.5}
            strokeMiterlimit={10}
          />
          <path
            d="M34.5384 24C34.5384 29.8202 29.8203 34.5384 24.0002 34.5384C18.1801 34.5384 13.4619 29.8202 13.4619 24C13.4619 18.1798 18.1801 13.4617 24.0002 13.4617C29.8203 13.4617 34.5384 18.1798 34.5384 24Z"
            stroke="white"
            strokeWidth={2.5}
            strokeMiterlimit={10}
          />
          <path
            d="M28.4274 21.2858L21.885 27.8282"
            stroke="white"
            strokeWidth={2.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
          <path
            d="M19.385 25.328L21.8851 27.8282"
            stroke="white"
            strokeWidth={2.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_135_44863">
        <rect width={48} height={48} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;