import React, { ReactElement } from 'react'

export type ButtonColors = {
  background?: string
  border?: string
  text: string
}

type Props = {
  colors?: ButtonColors
  className?: string
  label: string
  handleClick?: () => any
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

export default function Button({
  colors,
  className = '',
  label,
  handleClick,
  type = 'button',
  disabled,
}: Props): ReactElement {
  const style: React.CSSProperties = {}
  if (!className && colors) {
    style.backgroundColor = colors.background
    style.borderColor = colors.border
    style.color = colors.text
  }

  return (
    <button
      type={type}
      className={`${className} btn`}
      style={style}
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  )
}
