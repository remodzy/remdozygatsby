import React, { ReactElement } from 'react'

import iconWrapperStyles from './IconWrapper.module.css'

type Props = {
  children: ReactElement<any>
  color?: string
}

const IconWrapper = ({ children, color }: Props) => (
  <div className={iconWrapperStyles.root} style={{ backgroundColor: color }}>
    {children}
  </div>
)

export default IconWrapper
