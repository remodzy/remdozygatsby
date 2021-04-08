import React, { FC, ReactElement, ReactNode } from 'react'

import { root } from './PrimarySubtitle.module.css'

type Props = {
  children: ReactElement | ReactElement[] | ReactNode | string
}

const PrimarySubtitle: FC<Props> = ({ children }): ReactElement => (
  <div className={root}>{children}</div>
)

export default PrimarySubtitle
