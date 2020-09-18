import React, { ReactElement, useContext } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import Button from '~components/button'
import Label from '~components/Label'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import { DeviceDetectContext } from '~components/layout'
import DotsArtifact from '~components/dot'
import BlockWrapper from '~components/blockWrapper'

import CompaniesLogos from '../CompaniesLogos'
import primaryContentStyles from './PrimaryContent.module.css'

type Props = {
  title: string
  subTitle: string
  image: FluidObject
}

const PrimaryContent: React.FC<Props> = ({ title, subTitle, image }) => {
  const { isMobile } = useContext(DeviceDetectContext)
  return (
    <div className={primaryContentStyles.root}>
      <BlockWrapper
        styleWrapper={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className={primaryContentStyles.primaryLabel}>{title}</div>
        <div className={primaryContentStyles.secondaryLabel}>{subTitle}</div>
        <div className={primaryContentStyles.buttonContainer}>
          <Button
            label='Start Free Trial'
            className='primary-btn'
            handleClick={() => {}}
          />
          <div className={primaryContentStyles.labelContainer}>
            <Label text='No credit card required' />
          </div>
        </div>

        <Img fluid={image} style={{ width: '100%' }} />
        <CompaniesLogos />
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>

      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}

      <div className={primaryContentStyles.backgroundCover}></div>
    </div>
  )
}

export default PrimaryContent

function OutDesktopArtifacts() {
  return (
    <DotsArtifact
      columns={3}
      left={17}
      top={234}
      size={5.78}
      gap={27.56}
      zIndex={0}
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
  )
}

function OutMobileArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={30}
        centerSize={5.36}
        left='82.93%'
        top={30}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={30}
        centerSize={6}
        left='9.07%'
        top={322}
      />
      <DotsArtifact
        columns={3}
        left={10}
        top={42}
        size={2.93}
        gap={13.96}
        zIndex={0}
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
        columns={4}
        right={10}
        top={318}
        size={3.67}
        gap={17.5}
        zIndex={0}
        // prettier-ignore
        list={[
          0,0,0,0,
          0,1,0,0,
          0,1,0,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        columns={3}
        left={15}
        top={676}
        size={3.67}
        gap={17.5}
        zIndex={0}
        // prettier-ignore
        list={[
          0,0,1,
          0,0,0,
          0,0,0,
          1,1,0,
        ]}
      />
    </>
  )
}

function InMobileArtifacts() {
  return <></>
}
function InDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        columns={8}
        right={256}
        top={344}
        size={5.78}
        gap={27.56}
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
        mainSize={64}
        centerSize={12}
        left='13.6875%'
        top={30}
      />
      <CircleArtifact
        name={CircleName.Blue}
        mainSize={40}
        centerSize={12}
        left='82.6875%'
        top={238}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        centerSize={12}
        left='92.5625%'
        top={611}
      />
    </>
  )
}
