import React from 'react'

import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import ServiceList from './components/ServiceList'
import DotsArtifact from '../../../../components/dot'

const styles = {
  root: {
    position: 'relative' as const,
    paddingTop: 38,
  },
}

export default function Service() {
  return (
    <div style={styles.root}>
      <SectionLabel text='SERVICE' />
      <SectionTitle text='Remodzy Service' />
      <ServiceList />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={22}
        centerSize={5}
        left='89.9375%'
        top={0}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={5}
        left='29.375%'
        top={130}
      />
      <DotsArtifact
        left={17}
        top={234}
        columns={3}
        list={[
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
        ]}
      />
    </div>
  )
}
