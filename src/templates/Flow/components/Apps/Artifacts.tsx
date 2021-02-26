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
      <DotsArtifact
        bottom={22}
        right='1.51%'
        size={5}
        gap={25}
        columns={4}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,0,0,1,
          1,0,0,1,
          0,0,0,0,
        ]}
      />
    </>
  )
}

function DesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        left='20.7778%'
        top={155}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={40}
        right='15.3333%'
        bottom={56}
      />
      <DotsArtifact
        top={388}
        left='1.51%'
        size={5}
        gap={25}
        columns={5}
        zIndex={0}
        // prettier-ignore
        list={[
          0,0,0,0,0,
          0,0,0,1,0,
          1,0,0,1,0,
          0,0,0,0,0,
        ]}
      />
      <DotsArtifact
        top={276}
        right='1.7278%'
        size={7}
        gap={34}
        columns={2}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,
          0,1,
          0,0,
          0,0,
          0,0,
          1,0,
          1,0,
          0,0,
        ]}
      />
    </>
  )
}
