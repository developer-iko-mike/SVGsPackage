import { Itsxsvg } from './types';
import React from 'react'

const ArrowLeftSVG = ({
  fill = "none",
  width = 24,
  height = 24,
  className = "size-6",
  onClick = () => {},
}: Itsxsvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} width={width} height={height} onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}

export default ArrowLeftSVG