import React, { ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import SectionTitle from '~components/SectionTitle'

import FeatureList from '../FeatureList'
import formsStyles from './Features.module.css'

const FeaturesBlock = (): ReactElement => (
  <div className={formsStyles.root}>
    <SectionTitle text='Key Features' />
    <FeatureList />
    <CircleArtifact
      name={CircleName.Green}
      mainSize={32}
      left='24.9305%'
      top={0}
    />
  </div>
)

export default FeaturesBlock
