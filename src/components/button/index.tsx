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
}: Props): ReactElement<any, any> {
  let style: any = {
    padding: '18px 32px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    color: 'white',
    outline: 'none',
  }
  if (!className && colors) {
    style.backgroundColor = colors.background
    style.color = colors.text
  }

  return (
    <button
      type='button'
      className={className}
      style={style}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}
