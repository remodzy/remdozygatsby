import React from 'react'

export default function Dot({ background = '#CCD0D3' }) {
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
