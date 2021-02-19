import React, { ReactElement } from 'react'

import iconWrapperStyles from './IconWrapper.module.css'

type Props = {
  className?: string
  children: ReactElement
  color?: string
}

const IconWrapper = ({ className, children, color }: Props): ReactElement => (
  <div
    className={`${iconWrapperStyles.root} ${className}`}
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
)

export default IconWrapper
