import React from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import BlockWrapper from '~components/BlockWrapper'
import SectionLabel from '~templates/shared/sectionLabel'
import SectionTitle from '~templates/shared/sectionTitle'
import { useDeviceDetect } from '~utils/hooks'

import FeatureList from './FeatureList'
import benefitsStyles from './Benefits.module.css'

export default function Benefits() {
  const { isMobile } = useDeviceDetect()

  return (
    <div className={benefitsStyles.root}>
      <BlockWrapper>
        <SectionLabel text='Benefits' color='primary' />
        <SectionTitle text='Features' />
        <FeatureList />
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={1115}
        right={15.16}
        columns={3}
        size={3.9}
        gap={18.57}
        // prettier-ignore
        list={[
            0,0,0,
            0,1,0,
            0,1,0,
            0,0,0,
          ]}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='-20px'
        top={419}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={48}
        centerSize={9.6}
        left='94%'
        top={560}
      />
    </>
  )
}

function OutMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={0}
        left={11.88}
        columns={4}
        size={3.9}
        gap={18.58}
        // prettier-ignore
        list={[
          0,0,1,0,
          0,0,1,0,
          0,0,1,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={74}
        right={7.51}
        columns={2}
        size={3}
        gap={14.18}
        // prettier-ignore
        list={[
            0,0,
            0,1,
            0,0,
            0,0,
            0,0,
            1,0,
            1,0,
            0,0,
          ]}
      />
      <DotsArtifact
        bottom={0}
        right={40}
        columns={4}
        size={3}
        gap={13.74}
        // prettier-ignore
        list={[
            1,0,0,0,
            0,0,0,1,
            0,0,0,1,
            0,1,0,0,
            0,0,0,0,
            0,0,0,0,
            0,1,1,0,
            0,0,0,0,
          ]}
      />
    </>
  )
}

function InDesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={24}
        centerSize={4.29}
        left='13.3125%'
        top={60}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={52}
        centerSize={10.4}
        top={849}
        left='85.875%'
      />
    </>
  )
}

function OutDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={516}
        left={26}
        columns={2}
        size={9.74}
        gap={46.41}
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
        size={10.22}
        gap={48.69}
        // prettier-ignore
        list={[
            0,1,
            0,0,
            0,0,
            1,0,
          ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={64}
        centerSize={11.43}
        left='76.0625%'
        top={116}
      />
    </>
  )
}
