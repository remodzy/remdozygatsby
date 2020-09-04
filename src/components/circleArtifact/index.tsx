import React, { ReactElement } from 'react'

export enum CircleName {
  Green = 'green',
  Purple = 'purple',
  Blue = 'blue',
  Violet = 'violet',
}

type Props = {
  mainSize: number
  centerSize: number
  top?: number
  bottom?: number
  left: string
  name: CircleName
}

export const CircleArtifact = (props: Props): ReactElement<any, any> => {
  const styles = getStyles(props)

  return (
    <div style={styles.root}>
      <div style={styles.center}></div>
    </div>
  )
}

type Style = {
  root: React.CSSProperties
  center: React.CSSProperties
}

function getStyles({
  mainSize,
  centerSize,
  top,
  bottom,
  left,
  name,
}: Props): Style {
  const colors = getCircleColors(name)
  const root = {
    position: 'absolute' as const,
    display: 'flex',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    borderRadius: '50%',
    opacity: 0.2,
    width: mainSize,
    height: mainSize,
    top,
    bottom,
    left,
    background: colors.main,
  }
  const center = {
    borderRadius: '50%',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    width: centerSize,
    height: centerSize,
    background: colors.center,
  }

  return {
    root,
    center,
  }
}

type Result = {
  main: string
  center: string
}

function getCircleColors(name: string): Result {
  switch (name) {
    case CircleName.Green:
      return {
        main: 'linear-gradient(180deg, #CDE7DA 0%, #97BFAB 100%)',
        center: '#5B9976',
      }
    case CircleName.Purple:
      return {
        main: 'linear-gradient(180deg, #A1A7ED 0%, #7177C2 100%)',
        center: '#5A60A6',
      }
    case CircleName.Violet:
      return {
        main: 'linear-gradient(180deg, #E0C7F7 0%, #CB9EF3 100%)',
        center: '#B98EE0',
      }
    case CircleName.Blue:
      return {
        main: 'linear-gradient(180deg, #8AA5ED 0%, #507CF5 100%)',
        center: '#4865EB',
      }
  }

  return {
    main: 'linear-gradient(180deg, #8AA5ED 0%, #507CF5 100%)',
    center: '#4865EB',
  }
}
