import React, { useState, useRef, RefObject, MutableRefObject } from 'react'

import accordionStyles from './Accordion.module.css'

type Props = {
  title: string
  children: React.ReactNode | React.ReactNode[]
}
interface Ref {
  value: string
  setValue: (value: string) => void
}

const Accordion: React.FC<Props> = ({ children, title }) => {
  const panelRef = useRef() as MutableRefObject<HTMLDivElement>
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    if (panelRef && panelRef.current.style.maxHeight) {
      panelRef.current.style.maxHeight = ''
    } else {
      panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`
    }
  }

  return (
    <div className={accordionStyles.root}>
      <button onClick={handleClick} className={accordionStyles.button}>
        <span className={accordionStyles.title}>{title}</span>
        <span className={`${open ? accordionStyles.icon : ''}`}>
          <Arrow />
        </span>
      </button>
      <div
        ref={panelRef}
        className={`${accordionStyles.panel} ${
          open ? accordionStyles.active : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion

function Arrow() {
  return (
    <svg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 1l4 4 4-4'
        stroke='#091F3E'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
