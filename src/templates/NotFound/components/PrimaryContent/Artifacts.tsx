import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'

const Artifacts: FC<unknown> = (): ReactElement => {
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        left='-16px'
        top={38}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        right='-20px'
        top={110}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        left='-20px'
        top={340}
      />
    </>
  )
}

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        left='7.7778%'
        top={107}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        right='18.3333%'
        top={106}
      />
    </>
  )
}
