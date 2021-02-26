import React, { FC, ReactElement } from 'react'

import DotsArtifact from '~components/Dot'
import { useDeviceDetect } from '~utils/hooks'

const Artifacts: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-48}
        left='5.1111%'
        size={3}
        columns={4}
        gap={11}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={-50}
        right='6.6667%'
        size={3}
        columns={4}
        gap={11}
        zIndex={1}
        // prettier-ignore
        list={[
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
      ]}
      />
    </>
  )
}

function DesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-118}
        left='11.1111%'
        size={6}
        columns={4}
        gap={27}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={130}
        right={31}
        columns={5}
        size={8.52}
        gap={40.58}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,1,0,0,
          0,0,0,1,0,
          0,1,0,0,0,
          0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={-46}
        left='19.0278%'
        columns={4}
        size={5}
        gap={25}
        zIndex={1}
        opacity={0.4}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
          0,0,0,0,
        ]}
      />
    </>
  )
}
