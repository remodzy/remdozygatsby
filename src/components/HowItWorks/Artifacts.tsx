import React from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'

export function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={160}
        right={10.22}
        columns={2}
        zIndex={1}
        size={3}
        gap={10.22}
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
      <DotsArtifact
        top={700}
        left={13.57}
        columns={3}
        zIndex={1}
        size={3}
        gap={18.57}
        // prettier-ignore
        list={[
          0,0,0,
          0,1,0,
          0,1,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        top={770}
        right={14.64}
        columns={2}
        zIndex={1}
        size={3.9}
        gap={18.57}
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
        mainSize={62}
        centerSize={12.4}
        left='-8.27%'
        top={340}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='88%'
        top={490}
      />
    </>
  )
}

export function OutMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-80}
        left={11.31}
        columns={3}
        zIndex={1}
        size={4.07}
        gap={19.38}
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

export function InDesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='69.1875%'
        top={23}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='11.25%'
        top={401}
      />
      <DotsArtifact
        top={55}
        left={52}
        columns={8}
        zIndex={1}
        size={4.19}
        gap={19.96}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />
    </>
  )
}

export function OutDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={316}
        right={22}
        columns={4}
        zIndex={1}
        size={6.26}
        gap={29.8}
        // prettier-ignore
        list={[
          0, 1, 1, 0,
          0, 0, 0, 0,
          0, 0, 0, 1,
          1, 0, 0, 0
        ]}
      />
    </>
  )
}
