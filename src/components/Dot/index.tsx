import React from 'react'

import dotStyles from './Dot.module.css'

export const gradient = 'linear-gradient(180deg, #8AA5ED 0%, #507CF5 100%)'

export function Dot({ background = '#CCD0D3', size = 6 }) {
  return (
    <i style={{ width: size, height: size }}>
      <i className={dotStyles.wrapper} style={{ background }}></i>
    </i>
  )
}

type Props = {
  bottom?: number | string
  columns: number | string
  right?: number | string
  top?: number | string
  left?: number | string
  list: number[]
  zIndex?: number
  gap?: number
  size?: number
  opacity?: number
  background?: {
    default: string
    primary: string
  }
}

export default function DotsArtifact({
  columns,
  list,
  top = 'initial',
  left = 'initial',
  right = 'initial',
  bottom = 'initial',
  zIndex = -1,
  gap = 28,
  size = 6,
  opacity = 0.5,
  background = {
    default: '#CCD0D3',
    primary: gradient,
  },
}: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        right,
        bottom,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, auto)`,
        gap: `${gap}px`,
        opacity,
        zIndex,
      }}
    >
      {list.map((el: number, index: number): any => (
        <Dot
          background={el ? background.primary : background.default}
          size={size}
          key={index}
        />
      ))}
    </div>
  )
}
