import React from 'react'
import { Itsxsvg } from './types';

const CurveSVG = ({
  fill = "#F3F4F6",
  width = 100,
  height = 22,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
    return (
        <svg width={width} height={height} className={className} onClick={onClick} viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" fill={fill} />
        </svg>
    )
}

export default CurveSVG