import React, { ReactElement } from 'react'

export type ButtonColors = {
  background?: string
  text: string
}

type Props = {
  colors?: ButtonColors
  className?: string
  label: string
  handleClick: () => any
}

export default function Button({
  colors,
  className = '',
  label,
  handleClick,
}: Props): ReactElement {
  let style: any = {}
  if (!className && colors) {
    style.backgroundColor = colors.background
    style.color = colors.text
  }

  return (
    <button
      type='button'
      className={`${className} btn`}
      style={style}
      onClick={handleClick}
    >
      <span>{label}</span>
    </button>
  )
}
