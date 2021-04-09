import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'

const Artifacts: FC<unknown> = (): ReactElement => {
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}
export default Artifacts

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={6.4}
        left='7.8472%'
        top={111}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={54}
        centerSize={8}
        left='16.7361%'
        bottom={41}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        centerSize={8}
        right='18.3333%'
        top={35}
      />
    </>
  )
}

function MobileArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={6.4}
        left='-16px'
        top={24}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        centerSize={8}
        right='-20px'
        top={110}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='-20px'
        bottom={51}
      />
    </>
  )
}
