import React, { FC, ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
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
        top={140}
        right='1.7278%'
        size={6}
        gap={28}
        columns={1}
        zIndex={1}
        // prettier-ignore
        list={[
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
      ]}
      />
      <DotsArtifact
        top={535}
        left='1.2222%'
        size={6}
        gap={28}
        columns={3}
        zIndex={0}
        // prettier-ignore
        list={[
        0,0,0,
        0,0,1,
        0,0,0,
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

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        left='10.9027%'
        bottom={50}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        left='23.9027%'
        top={20}
      />
      <DotsArtifact
        top={148}
        left='1.7278%'
        size={6}
        gap={26}
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
      <DotsArtifact
        top={500}
        left='44.3611%'
        size={3}
        gap={13}
        columns={4}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,1,1,0,
          0,0,0,0,
          0,0,0,0,
          0,0,1,0,
          1,0,0,0,
          1,0,0,0,
          0,0,0,1,
        ]}
      />
      <DotsArtifact
        top={650}
        right='1.51%'
        size={5}
        gap={25}
        columns={7}
        zIndex={0}
        // prettier-ignore
        list={[
          0,1,1,0,0,0,0,
          0,0,0,0,0,0,1,
          0,0,0,1,0,0,1,
          1,0,0,0,0,0,0,
        ]}
      />
    </>
  )
}
