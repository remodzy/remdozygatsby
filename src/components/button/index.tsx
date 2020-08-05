import React, { ReactElement } from 'react'
import { getColor } from '../../utils/colors'

type Props = {
  colors?: {
    background: string
    text: string
  }
  className?: string
  label: string
  handleClick: () => any
}

export default function Button({
  colors = null,
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
  if (!className) {
    style.backgroundColor = colors.background
    style.color = colors.text
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}
