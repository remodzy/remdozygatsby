import React, { ReactElement } from 'react'

import RContainer from '~components/RContainer'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'

import Artifacts from './Artifacts'
import * as styles from './Benefits.module.css'
import ControlList from './ControlList'

const Benefits = (): ReactElement => (
  <RSection artifacts={Artifacts}>
    <RContainer>
      <div className={styles.root}>
        <SectionLabel text='Benefits' color='primary' />
        <RSectionTitle>Variety Of Controls</RSectionTitle>
        <ControlList />
      </div>
    </RContainer>
  </RSection>
)

export default Benefits
