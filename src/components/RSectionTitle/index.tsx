import React, { FC, ReactElement } from 'react'

import { root } from './RSectionTitle.module.css'

const RSectionTitle: FC<{ maxWidth?: string }> = ({
  maxWidth,
  children,
}): ReactElement => (
  <div className={root} style={maxWidth ? { ...{ maxWidth } } : {}}>
    {children}
  </div>
)

export default RSectionTitle
