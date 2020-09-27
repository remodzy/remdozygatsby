import React from 'react'

import BlockWrapper from '~components/blockWrapper'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import SectionLabel from '~templates/shared/sectionLabel'
import SectionTitle from '~templates/shared/sectionTitle'
import { useDeviceDetect } from '~utils/hooks'

import FormList from './FormList'

import formsStyles from './Forms.module.css'

const FormsBlock = () => {
  const { isMobile } = useDeviceDetect()
  return (
    <div className={formsStyles.root}>
      <BlockWrapper>
        <SectionLabel text='Forms' />
        <SectionTitle text='Remodzy Forms' />
        <FormList />
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

export default FormsBlock

function InDesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={44}
        centerSize={8.8}
        left='24.875%'
        top={50}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={6.4}
        right='17.625%'
        top={4}
      />
    </>
  )
}

function OutDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={30}
        left='1.32%'
        columns={3}
        size={6.75}
        gap={32.17}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,1,
          0,0,1,
          1,0,0,
          0,1,0,
          0,0,0,
          1,1,0,
          0,0,1,
        ]}
      />
      <DotsArtifact
        bottom={100}
        left='1.32%'
        columns={3}
        size={6.75}
        gap={32.17}
        // prettier-ignore
        list={[
          0,0,0,
          1,1,0,
          0,0,0,
          0,0,0,
          0,1,0,
          0,0,0,
          0,0,0,
          0,0,1,
        ]}
      />
      <DotsArtifact
        top={1000}
        right='1.436%'
        columns={5}
        size={5.74}
        gap={27.37}
        // prettier-ignore
        list={[
          0,1,1,0,0,
          0,0,0,0,0,
          0,0,0,1,0,
          1,0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={640}
        right='1.436%'
        columns={5}
        size={4.28}
        gap={20.4}
        // prettier-ignore
        list={[
          0,0,0,0,0,
          0,1,0,0,1,
          0,1,0,0,0,
          0,0,0,0,0,
        ]}
      />
    </>
  )
}

function InMobileArtifacts() {
  return <></>
}

function OutMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-30}
        right='2.829%'
        columns={2}
        size={3.16}
        gap={15.6}
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
        left='13.067%'
        top={0}
      />
    </>
  )
}
