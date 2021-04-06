import React, { MutableRefObject, useRef, useState } from 'react'

import Icon from '~components/Icons'

import * as styles from './Accordion.module.css'

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
    <div className={styles.root}>
      <button onClick={handleClick} className={styles.button}>
        <span className={styles.title}>{title}</span>
        <span
          className={`${open ? styles.iconExpanded : styles.iconCollapsed}`}
        >
          <Icon className={styles.svgIcon} name='arrow' />
        </span>
      </button>
      <div
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.active : ''}`}
      >
        <div className={styles.listWrapper}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
