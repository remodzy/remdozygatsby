import React, { ReactElement } from 'react'

type Props = {
  container?: {
    width: number
    height: number
    left: number
    top: number
  }
  primary?: {
    background: string
  }
  secondary?: {
    width: number
    height: number
    background: string
  }
}

export default function CircleArtifact({
  container,
  primary,
  secondary,
}: Props): ReactElement<any, any> {
  return (
    <div
      style={{
        position: 'absolute',
        opacity: 0.2,
        ...container,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          ...primary,
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            ...secondary,
          }}
        ></div>
      </div>
    </div>
  )
}
