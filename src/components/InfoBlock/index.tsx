import React, { FC, ReactElement } from 'react'

import { ListItem } from '~components/RGrid'

import styles from './InfoBlock.module.css'

type Props = ListItem & {
  label?: string
  extraItem?: () => ReactElement
}

const InfoBlock: FC<Props> = ({
  colors = {},
  icon: Icon,
  label,
  title,
  text,
  link,
  extraItem: ExtraItem,
}): ReactElement => (
  <div className={styles.root}>
    <div className={styles.iconContainer}>
      <Icon />
      {label && (
        <span className={styles.label}>
          <strong>rox</strong>
          {label}
        </span>
      )}
    </div>
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{text}</div>
    <div className={styles.footer}>
      <a
        className='btn primary-btn'
        href={link}
        style={{
          textDecoration: 'none',
          background: colors?.background,
          color: colors?.text,
        }}
      >
        Learn More
      </a>
      {ExtraItem && <ExtraItem />}
    </div>
  </div>
)

export default InfoBlock
