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
        left='5.9027%'
        top={520}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={44}
        right='39.1667%'
        top={645}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        left='24.9306%'
        top={725}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={56}
        right='29.1667%'
        top={1325}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={44}
        left='27.7083%'
        top={1460}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        left='37.5%'
        bottom={1310}
      />
      <DotsArtifact
        top={108}
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
        top={32}
        right='4.4444%'
        size={6}
        gap={26}
        columns={8}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,0,0,0,0,0,
          0,0,0,0,0,0,1,0,
          0,0,0,1,0,0,1,0,
          0,0,0,0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={650}
        left='1.1049%'
        size={6}
        gap={28}
        columns={6}
        zIndex={1}
        // prettier-ignore
        list={[
          1,0,0,0,0,0,
          0,0,0,0,1,0,
          0,1,0,0,1,0,
          0,0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={770}
        right='0%'
        size={6}
        gap={28}
        columns={8}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,0,0,0,0,0,
          0,0,0,0,0,0,0,1,
          0,0,0,1,0,0,0,1,
          1,0,0,0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={1160}
        left='7.3611%'
        size={4}
        gap={17}
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
        top={1640}
        left='0.8806%'
        size={4}
        gap={19}
        columns={5}
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
        top={1500}
        right='15%'
        size={5}
        gap={25}
        columns={4}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,1,1,0,
        ]}
      />
      <DotsArtifact
        top={1955}
        left='35.51%'
        size={5}
        gap={25}
        columns={8}
        zIndex={0}
        // prettier-ignore
        list={[
          0,1,1,0,0,0,0,0,
          0,0,0,0,0,0,1,0,
          0,0,0,1,0,0,1,0,
          1,0,0,0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={285}
        left='1.5625%'
        size={5}
        gap={25}
        columns={2}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,
          1,0,
          0,0,
          0,0,
          1,0,
          0,0,
          0,0,
          0,1,
        ]}
      />
    </>
  )
}
