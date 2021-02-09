import React, { FC, ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import { useDeviceDetect } from '~utils/hooks'

const Artifacts: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts() {
  return <></>
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
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={54}
        left='7.9861%'
        top={594}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        right='11%'
        bottom={64}
      />
    </>
  )
}
