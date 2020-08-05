import React from 'react'

export function Circle() {
    return (
        <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity=".2">
                <circle cx="32" cy="32" r="32" fill="url(#paint0_linear)"/>
                <circle r="5.714" transform="matrix(-1 0 0 1 32 32)" fill="#5A60A6"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A1A7ED"/>
                    <stop offset="1" stopColor="#7177C2"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
