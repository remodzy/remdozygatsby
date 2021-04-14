import React, { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'

export const Artifacts = (): ReactElement => {
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

function MobileArtifacts() {
  return <></>
}

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        right='20.5556%'
        top={140}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={60}
        right='1.875%'
        bottom={0}
      />
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={36}
        left='6.5972%'
        bottom={0}
      />
    </>
  )
}
