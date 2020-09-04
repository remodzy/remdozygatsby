import React, { useContext } from 'react'

import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import ServiceList from './components/ServiceList'
import serviceStyles from './Service.module.css'
import { DeviceDetectContext } from '~components/layout'

export default function Service() {
  const { isMobile } = useContext(DeviceDetectContext)

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
