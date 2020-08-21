import React, { ReactElement } from 'react'

export const gradient = 'linear-gradient(180deg, #8AA5ED 0%, #507CF5 100%)'

export function Dot({ background = '#CCD0D3' }) {
  return (
    <div style={{ width: 6, height: 6 }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background,
          borderRadius: '50%',
        }}
      ></div>
    </div>
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
}

export default function DotsArtifact({
  columns,
  list,
  top = 'initial',
  left = 'initial',
  right = 'initial',
  bottom = 'initial',
  zIndex = -1,
}: Props): ReactElement<any, any> {
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
        gap: '28px',
        opacity: 0.5,
        zIndex,
      }}
    >
      {list.map((el, index) =>
        el ? <Dot background={gradient} key={index} /> : <Dot key={index} />
      )}
    </div>
  )
}
