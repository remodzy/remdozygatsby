import React, { FC, ReactElement } from 'react'

import styles from './RoxContainer.module.css'

type Props = {
  children: ReactElement | ReactElement[]
}

const RoxContainer: FC<Props> = ({ children }): ReactElement => (
  <div className={styles.root}>{children}</div>
)

export default RoxContainer
