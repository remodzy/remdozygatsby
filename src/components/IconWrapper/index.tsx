import React, { ReactElement } from 'react'

import * as styles from './IconWrapper.module.css'

type Props = {
  className?: string
  children: ReactElement
  color?: string
}

const IconWrapper = ({ className, children, color }: Props): ReactElement => (
  <div
    className={`${styles.root} ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
)

export default IconWrapper
