import React, { ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import RGrid from '~components/RGrid'
import RSection from '~components/RSection'
import { useDeviceDetect } from '~utils/hooks'

import Artifacts from './Artifacts'
import { featureConfig } from './featureConfig'
import styles from './Features.module.css'

const FeaturesBlock = (): ReactElement => {
  const { isMobile } = useDeviceDetect()
  return (
    <RSection artifacts={Artifacts}>
      <>
        <div className={styles.root}>
          <RGrid items={featureConfig} title='Key Features' />
        </div>
        {!isMobile && (
          <CircleArtifact
            name={CircleName.Green}
            mainSize={32}
            left='24.9305%'
            top={0}
          />
        )}
      </>
    </RSection>
  )
}

export default FeaturesBlock
