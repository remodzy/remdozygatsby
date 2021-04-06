import React, { ReactElement } from 'react'

import IconWrapper from '~components/IconWrapper'

import * as styles from './ControlItem.module.css'

type Props = {
  title: string
  icon: () => ReactElement
}

export const ControlItem: React.FC<Props> = ({ title, icon: Icon }) => (
  <div className={styles.root}>
    <IconWrapper color='rgba(73, 109, 228, .15)'>
      <Icon />
    </IconWrapper>
    <div className={styles.title}>{title}</div>
  </div>
)
