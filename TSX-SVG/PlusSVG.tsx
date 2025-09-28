import { Itsxsvg } from '@/lib/types'
import React from 'react'

const PlusSVG = ({
  fill = "#7D7C7C",
  width = 24,
  height = 24,
  className = "",
  onClick = () => {},
}: Itsxsvg) => {
    return (
        <svg width={width} height={height} className={className} onClick={onClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default PlusSVG