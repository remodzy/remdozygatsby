import React from 'react'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'

import DotsArtifact from '~components/Dot'
import { useDeviceDetect } from '~utils/hooks'

export default function Artifacts() {
  const { isMobile } = useDeviceDetect()

  if (isMobile) {
    return (
      <>
        <DotsArtifact
          top={35}
          left='2.67%'
          size={3}
          gap={14}
          columns={3}
          // prettier-ignore
          list={[
            0,0,0,
            0,0,1,
            0,0,1,
            1,0,0,
            0,0,0,
            0,0,0,
            1,1,0,
            0,0,0,
          ]}
        />
        <DotsArtifact
          top={360}
          right='3.467%'
          size={3}
          gap={14}
          columns={6}
          // prettier-ignore
          list={[
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,1,0,0,
            1,0,0,0,0,0,
          ]}
        />
        <DotsArtifact
          top={1050}
          right='4.413%'
          size={4}
          gap={19.72}
          columns={6}
          // prettier-ignore
          list={[
            0,0,0,1,0,0,
            1,0,0,0,0,0,
          ]}
        />
        <DotsArtifact
          top={1300}
          right='25.33%'
          size={3}
          gap={11.39}
          columns={8}
          // prettier-ignore
          list={[
            0,1,1,0,0,0,0,0,
            0,0,0,0,0,0,1,0,
            0,0,0,1,0,0,1,0,
            1,0,0,0,0,0,0,0,
          ]}
        />
        <DotsArtifact
          bottom={124}
          right='1.629%'
          size={6}
          gap={14}
          columns={5}
          // prettier-ignore
          list={[
            0,1,1,0,0,
            0,0,0,0,0,
            0,0,0,1,0,
            1,0,0,0,0,
          ]}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={30}
          centerSize={5.36}
          right='33.16%'
          top={10}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={28}
          centerSize={5.6}
          right='25.33%'
          top={700}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={34}
          centerSize={6}
          right='12.8%'
          top={1810}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={18}
          centerSize={4}
          right='7.467%'
          top={2210}
        />
      </>
    )
  }

  return <></>
}
