import React, { FC, ReactElement } from 'react'

import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import { useDeviceDetect } from '~utils/hooks'

const Artifacts: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts(): ReactElement {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        right='4.7222%'
        top={116}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        right='35.2778%'
        top={871}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={48}
        left='21.1111%'
        bottom={840}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        left='2.2222%'
        bottom={388}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        right='17.5%'
        bottom={49}
      />
      <DotsArtifact
        top={579}
        right='7.0222%'
        size={6}
        columns={3}
        gap={28}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,
          0,0,0,
        ]}
      />
      <DotsArtifact
        top={828}
        left='5.4833%'
        size={6}
        columns={2}
        gap={28}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,
          1,0,
          1,0,
          0,0,
        ]}
      />
      <DotsArtifact
        top={962}
        right='6.3167%'
        size={6}
        columns={2}
        gap={28}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,
          0,0,
          0,0,
          1,0,
        ]}
      />
      <DotsArtifact
        top={1472}
        left='3.425%'
        size={4}
        columns={2}
        gap={17}
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
      <DotsArtifact
        bottom={730}
        right='3.425%'
        size={4}
        columns={5}
        gap={19}
        zIndex={1}
        // prettier-ignore
        list={[
          0,1,1,0,0,
          0,0,0,0,0,
          0,0,0,1,0,
          1,0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={188}
        right='4.9%'
        size={4}
        columns={3}
        gap={25}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,1,
          0,0,0,
          0,0,0,
          0,0,1,
          0,0,0,
          0,0,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={155}
        left='2.2222%'
        size={5}
        columns={2}
        gap={25}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,
          1,0,
          1,0,
          0,0,
        ]}
      />
    </>
  )
}

function DesktopArtifacts(): ReactElement {
  return (
    <>
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={6.4}
        left='24.9306%'
        top={130}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        centerSize={12.4}
        right='8.9583%'
        top={83}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        centerSize={8}
        left='5.9028%'
        top={644}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={44}
        centerSize={8.8}
        right='39.1667%'
        top={755}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={44}
        centerSize={8.8}
        left='24.9306%'
        top={827}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={44}
        centerSize={8.8}
        left='27.7083%'
        bottom={602}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={56}
        centerSize={11.2}
        right='29.1667%'
        bottom={651}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='40.7639%'
        bottom={107}
      />
      <DotsArtifact
        top={170}
        left='1.7361%'
        size={5}
        columns={3}
        gap={25}
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
        top={838}
        right='0'
        size={6}
        columns={8}
        gap={28}
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
        top={810}
        left='1.1111%'
        size={6}
        columns={6}
        gap={28}
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
        top={235}
        right='4.4444%'
        size={6}
        columns={8}
        gap={28}
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
        top={1526}
        left='0.9028%'
        size={4}
        columns={5}
        gap={19}
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
        top={1190}
        left='13%'
        size={4}
        columns={4}
        gap={17}
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
        bottom={518}
        right='11%'
        size={4}
        columns={4}
        gap={17}
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
        bottom={156}
        left='43.4%'
        size={5}
        columns={8}
        gap={25}
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
        bottom={-120}
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
    </>
  )
}
