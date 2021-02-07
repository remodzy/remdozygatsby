import React, { ReactElement } from 'react'

import iconWrapperStyles from './IconWrapper.module.css'

type Props = {
  children: ReactElement
  color?: string
}

const IconWrapper = ({ children, color }: Props): ReactElement => (
  <div className={iconWrapperStyles.root} style={{ backgroundColor: color }}>
    {children}
  </div>
)

export default IconWrapper
