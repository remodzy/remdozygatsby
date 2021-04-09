import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'

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
        left='16px'
        top={38}
      />
      <DotsArtifact
        bottom={-90}
        left='4.7833%'
        size={5}
        gap={20}
        columns={2}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,
          0,0,
          0,0,
          1,0,
          1,0,
          0,0,
          0,1,
          1,0,
        ]}
      />
    </>
  )
}

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={68}
        right='7.3611%'
        top={120}
      />
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={36}
        left='18.3611%'
        top={25}
      />
      <DotsArtifact
        top={240}
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
