import React from 'react'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
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

  return (
    <>
      <DotsArtifact
        top={110}
        left='2.909%'
        size={3}
        columns={2}
        gap={14}
        // prettier-ignore
        list={[
            0,0,
            0,1,
            0,1,
            0,0,
            0,0,
            0,0,
            1,0,
            0,0,
          ]}
      />
      <DotsArtifact
        top={0}
        right='2.744%'
        size={3}
        columns={5}
        gap={14}
        // prettier-ignore
        list={[
            0,1,1,0,0,
            0,0,0,0,0,
            0,0,0,1,0,
            1,0,0,0,0,
          ]}
      />
      <DotsArtifact
        top={800}
        right='13.333%'
        size={3}
        columns={8}
        gap={14}
        // prettier-ignore
        list={[
            0,0,0,1,0,0,1,0,
            1,0,0,0,0,0,0,0,
          ]}
      />
      <DotsArtifact
        top={989}
        right='1.912%'
        size={4}
        columns={1}
        gap={14}
        // prettier-ignore
        list={[
           0,
           0,
           0,
           0,
           0,
           0,
           0,
           0,
          ]}
      />
      <DotsArtifact
        top={1330}
        left='14.933%'
        size={3}
        columns={4}
        gap={20}
        // prettier-ignore
        list={[
            0,0,0,0,
            0,1,1,0,
          ]}
      />
      <DotsArtifact
        bottom={26}
        left='14.437%'
        size={4}
        columns={8}
        gap={16}
        // prettier-ignore
        list={[
            0,0,0,0,0,0,1,0,
            0,0,0,1,0,0,1,0,
            1,0,0,0,0,0,0,0,
          ]}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={22}
        centerSize={4}
        left='13.6%'
        top={35}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={24}
        centerSize={5}
        left='17.067%'
        top={811}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={38}
        centerSize={8}
        right='-5%'
        bottom={16}
      />
    </>
  )
}
