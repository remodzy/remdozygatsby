import React from 'react'

import CircleArtifact from '../../../../components/circleArtifact'
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
        container={{
          width: 22,
          height: 22,
          left: 1439,
          top: 0,
        }}
        primary={{
          background: 'linear-gradient(180deg, #A1A7ED 0%, #7177C2 100%)',
        }}
        secondary={{
          width: 5,
          height: 5,
          background: '#5A60A6',
        }}
      />
      <CircleArtifact
        container={{
          width: 32,
          height: 32,
          left: 470,
          top: 130,
        }}
        primary={{
          background: 'linear-gradient(180deg, #CDE7DA 0%, #97BFAB 100%)',
        }}
        secondary={{
          width: 7,
          height: 7,
          background: '#5B9976',
        }}
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
