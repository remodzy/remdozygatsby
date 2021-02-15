import React, { FC, ReactElement } from 'react'

import styles from './RContainer.module.css'

type Props = {
  children: ReactElement | ReactElement[]
}

const RContainer: FC<Props> = ({ children }): ReactElement => (
  <div className={styles.root}>{children}</div>
)

export default RContainer
