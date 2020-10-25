import React from 'react'

type Props = {
  className?: string
  handleClick: () => any
  label: string
}

export default function LinkButton({
  label,
  className = 'primary-link-btn',
  handleClick,
}: Props) {
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  )
}
