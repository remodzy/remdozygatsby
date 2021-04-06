import React, { FC, ReactElement } from 'react'

import * as styles from './InfoBlock.module.css'

type Props = {
  icon: () => ReactElement
  label: string
  title: string
  text: string
  linkLabel: string
  link: string
  extraItem: () => ReactElement
}

const InfoBlock: FC<Props> = ({
  icon: Icon,
  label,
  title,
  text,
  linkLabel,
  link,
  extraItem: ExtraItem,
}): ReactElement => (
  <div className={styles.root}>
    <div className={styles.iconContainer}>
      <Icon />
      <span className={styles.label}>
        <strong>rox</strong>
        {label}
      </span>
    </div>
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{text}</div>
    <div className={styles.footer}>
      <a
        href={link}
        style={{ textDecoration: 'none' }}
        className='btn primary-btn'
      >
        {linkLabel}
      </a>
      <ExtraItem />
    </div>
  </div>
)

export default InfoBlock
