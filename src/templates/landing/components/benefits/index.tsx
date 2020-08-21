import React from 'react'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import FeatureList from './featureList'
import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'
import DotsArtifact from '../../../../components/dot'

const styles = {
  root: {
    paddingTop: 150,
    paddingBottom: 100,
    position: 'relative' as const,
  },
}

export default function Benefits() {
  return (
    <div style={styles.root}>
      <SectionLabel text='Benefits' color='primary' />
      <SectionTitle text='Features' />
      <FeatureList />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={64}
        centerSize={11.43}
        left='76.0625%'
        top={127}
      />
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={24}
        centerSize={4.29}
        left='13.3125%'
        top={223}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={52}
        centerSize={10.4}
        top={939}
        left='85.875%'
      />
      <DotsArtifact
        top={516}
        left={26}
        columns={2}
        // prettier-ignore
        list={[
          0,0,
          0,1,
          0,1,
          0,0,
          0,0,
          0,0,
          1,0,
          0,0,
        ]}
      />
      <DotsArtifact
        top={567}
        right={38}
        columns={2}
        // prettier-ignore
        list={[
          0,1,
          0,0,
          0,0,
          1,0,
        ]}
      />
    </div>
  )
}
