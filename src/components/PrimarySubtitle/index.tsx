import React, { FC, ReactElement } from 'react'

import * as styles from './PrimarySubtitle.module.css'

type Props = {
  children: ReactElement | ReactElement[] | string
}

const PrimarySubtitle: FC<Props> = ({ children }): ReactElement => (
  <div className={styles.root}>{children}</div>
)

export default PrimarySubtitle
