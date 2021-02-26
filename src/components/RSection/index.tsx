import React, { FC, ReactElement } from 'react'

import RContainer from '~components/RContainer'

import styles from './RSection.module.css'

type Props = {
  children: ReactElement | ReactElement[]
  artifacts?: FC<unknown>
  cover?: FC<unknown>
  allowOverflow?: boolean
}

const RSection: FC<Props> = ({
  children,
  artifacts: Artifacts,
  cover: Cover,
  allowOverflow = false,
}): ReactElement => (
  <div
    className={styles.root}
    style={{ overflow: allowOverflow ? 'visible' : 'hidden' }}
  >
    <RContainer>{children}</RContainer>
    {Artifacts && <Artifacts />}
    {Cover && <Cover />}
  </div>
)

export default RSection
