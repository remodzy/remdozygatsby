import React, { ReactElement } from 'react'

import IconWrapper from '~components/IconWrapper'

import * as styles from './FeatureItem.module.css'

type ItemProps = {
  title: string
  text: string
  icon: () => ReactElement
}

export const FeatureItem = ({
  title,
  text,
  icon: Icon,
}: ItemProps): ReactElement => (
  <div>
    <IconWrapper color='hsla(226, 74%, 59%, 0.2)' className={styles.icon}>
      <Icon />
    </IconWrapper>
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{text}</div>
  </div>
)
