import React, { FC, ReactElement } from 'react'

import { root } from './RSectionTitle.module.css'

const RSectionTitle: FC<unknown> = ({ children }): ReactElement => (
  <div className={root}>{children}</div>
)

export default RSectionTitle
