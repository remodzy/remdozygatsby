import React, { useState, useRef, RefObject, MutableRefObject } from 'react'

import accordionStyles from './Accordion.module.css'
import Icon from '~components/icons'

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
          <Icon name='arrow' />
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
