import React from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'
import { useDeviceDetect } from '~utils/hooks'

import ServiceList from './components/ServiceList'
import serviceStyles from './Service.module.css'

export default function Service() {
  const { isMobile } = useDeviceDetect()

  return (
    <div className={serviceStyles.root}>
      <SectionLabel text='SERVICE' />
      <SectionTitle text='Remodzy Service' />
      <ServiceList />
      {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
    </div>
  )
}

function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        right={7}
        top={0}
        columns={2}
        size={3}
        gap={15.06}
        // prettier-ignore
        list={[
          1,0,
          0,0,
          0,0,
          0,1,
          0,0,
          0,0,
          0,1,
          0,0,
        ]}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={22}
        centerSize={4.4}
        left='13.11%'
        top={11}
      />
    </>
  )
}

function InDesktopArtifacts() {
  return (
    <>
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
        // prettier-ignore
        list={[
          0,0,0,
          0,0,1,
          0,0,1,
          1,0,0,
          0,0,0,
          0,0,0,
          1,1,0,
          0,0,0,
        ]}
      />
    </>
  )
}
