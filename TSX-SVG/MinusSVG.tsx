import { Itsxsvg } from '@/lib/types'
import React from 'react'

const MinusSVG = ({
    fill = "#7D7C7C",
    width = 138,
    height = 55,
    className = "",
    onClick = () => { },
}: Itsxsvg) => {
    return (
        <svg width={width} height={height} className={className} onClick={onClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default MinusSVG