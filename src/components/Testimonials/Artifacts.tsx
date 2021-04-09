import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'

const Artifacts: FC<unknown> = (): ReactElement => {
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts(): ReactElement {
  return (
    <>
      <DotsArtifact
        bottom={122}
        right='1.3778%'
        columns={3}
        size={5}
        gap={26}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,
          0,0,0,
          1,0,0,
          0,0,0,
        ]}
      />
    </>
  )
}

function DesktopArtifacts(): ReactElement {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={64}
        left='8.8194%'
        top={58}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        right='4.0972%'
        top={156}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={36}
        right='28.4722%'
        bottom={60}
      />

      <DotsArtifact
        top={162}
        left='1.3778%'
        columns={5}
        size={5}
        gap={26}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,0,
          0,0,0,1,0,
          1,0,0,1,0,
          0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={369}
        right='1.3472%'
        columns={3}
        size={6}
        gap={28}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,
          0,1,1,
          0,0,0,
          0,0,0,
          0,0,1,
          1,0,0,
          1,0,0,
          0,0,0,
        ]}
      />
    </>
  )
}
