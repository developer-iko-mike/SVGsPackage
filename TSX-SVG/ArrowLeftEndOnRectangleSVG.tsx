import { Itsxsvg } from './types';
import React from 'react'

const ArrowLeftEndOnRectangleSVG = ({
    fill = "none",
    width = 24,
    height = 24,
    className = "size-6",
    onClick = () => { },
}: Itsxsvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={width} height={height} className={className} onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
    )
}

export default ArrowLeftEndOnRectangleSVG;