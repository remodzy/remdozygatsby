import React, { MutableRefObject, useRef, useState } from 'react'

import Icon from '~components/Icons'

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
        <span
          className={`${
            open ? accordionStyles.iconExpanded : accordionStyles.iconCollapsed
          }`}
        >
          <Icon className={accordionStyles.svgIcon} name='arrow' />
        </span>
      </button>
      <div
        ref={panelRef}
        className={`${accordionStyles.panel} ${
          open ? accordionStyles.active : ''
        }`}
      >
        <div className={accordionStyles.listWrapper}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
