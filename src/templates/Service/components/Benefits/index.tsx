import React, { ReactElement } from 'react'

import RContainer from '~components/RContainer'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import styles from './Benefits.module.css'
import FeatureList from './FeatureList'
import RSection from '~components/RSection'

const Benefits = (): ReactElement => (
  <RSection>
    <RContainer>
      <div className={styles.root}>
        <SectionLabel text='Benefits' color='primary' />
        <SectionTitle text='Features' />
        <FeatureList />
      </div>
    </RContainer>
  </RSection>
)

export default Benefits
