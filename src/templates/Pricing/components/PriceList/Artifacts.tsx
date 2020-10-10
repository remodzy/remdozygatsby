import React from 'react'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import { useDeviceDetect } from '~utils/hooks'

export default function Artifacts() {
  const { isMobile } = useDeviceDetect()

  if (!isMobile) {
    return (
      <>
        <DotsArtifact
          bottom={170}
          left='1.75%'
          size={7.4}
          columns={3}
          gap={35.28}
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
          bottom={60}
          left='42.4375%'
          size={6}
          columns={4}
          gap={27}
          // prettier-ignore
          list={[
            0,0,0,0,
            0,1,1,0,
            0,0,0,0,
          ]}
        />
        <DotsArtifact
          top={292}
          right='12.75%'
          size={6}
          columns={8}
          gap={28}
          // prettier-ignore
          list={[
            0,1,1,0,0,0,0,0,
            0,0,0,0,0,0,1,0,
            0,0,0,0,0,0,1,0,
            0,0,0,0,0,0,0,0,
          ]}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={46}
          centerSize={8}
          left='19.375%'
          top={189}
        />
        <CircleArtifact
          name={CircleName.Blue}
          mainSize={40}
          centerSize={8}
          right='8.9375%'
          top={95}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={56}
          centerSize={11}
          right='9.375%'
          bottom={174}
        />
      </>
    )
  }

  return <></>
}
