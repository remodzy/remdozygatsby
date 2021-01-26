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
        top={9}
        left={10}
        columns={3}
        size={2.79}
        gap={13.29}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,0,
          0,0,0,
          0,0,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        top={33}
        right={10}
        columns={3}
        size={3.57}
        gap={17.01}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,0,
          0,0,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={9}
        left={9}
        columns={6}
        size={3.01}
        gap={14.33}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,
          0,0,0,0,0,0,
          0,0,0,0,0,0,
        ]}
      />
    </>
  )
}

function DesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={189}
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
        opacity={0.2}
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
