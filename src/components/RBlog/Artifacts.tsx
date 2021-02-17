import React, { FC, ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import { useDeviceDetect } from '~utils/hooks'
import DotsArtifact from '~components/Dot'

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
        name={CircleName.Purple}
        mainSize={68}
        right='7.3611%'
        top={30}
      />
      <DotsArtifact
        top={170}
        right='0.7833%'
        size={6}
        gap={28}
        columns={3}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,
          0,0,0,
          0,0,0,
          1,0,0,
        ]}
      />
      <DotsArtifact
        bottom={327}
        left='0.8819%'
        size={4}
        gap={19}
        columns={3}
        zIndex={1}
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
    </>
  )
}
