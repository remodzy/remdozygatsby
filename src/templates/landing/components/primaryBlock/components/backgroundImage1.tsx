import React, { ReactElement } from 'react'
import Dot from './dot'

export default function BackgroundImage1(): ReactElement<any, any> {
  const gradient = 'linear-gradient(180deg, #8AA5ED 0%, #507CF5 100%)'
  return (
    <div
      style={{
        position: 'absolute',
        left: 17,
        top: 430,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '28px',
        opacity: 0.5,
      }}
    >
      <Dot />
      <Dot />
      <Dot />
      <Dot background={gradient} />
      <Dot background={gradient} />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot background={gradient} />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot background={gradient} />
    </div>
  )
}
