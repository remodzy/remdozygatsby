import React, { useCallback } from 'react'

import BlockWrapper from '~components/BlockWrapper'
import Button from '~components/Button'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import Label from '~components/Label'
import { authorize } from '~utils/auth'
import { useDeviceDetect } from '~utils/hooks'

import * as styles from './PrimaryContent.module.css'

type Props = {
  title: string
  subTitle: string
  image: string
}

const PrimaryContent: React.FC<Props> = ({ title, subTitle, image }) => {
  const { isMobile } = useDeviceDetect()

  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <div className={styles.root}>
      <BlockWrapper
        styleWrapper={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className={styles.primaryLabel}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className={styles.secondaryLabel}>{subTitle}</div>
        <div className={styles.buttonContainer}>
          <Button
            label='Start Free Trial'
            className='primary-btn'
            handleClick={handleClick}
          />
          <div className={styles.labelContainer}>
            <Label text='No credit card required' />
          </div>
        </div>

        <img src={image} alt='' />
        {/*<Img*/}
        {/*  fluid={image}*/}
        {/*  style={{ width: '100%', maxWidth: isMobile ? 732 : 1430 }}*/}
        {/*  loading='eager'*/}
        {/*/>*/}
        {/*{isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}*/}
      </BlockWrapper>

      {/*{isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}*/}

      <div className={styles.backgroundCover} />
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
        size={3}
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
        size={4}
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
        size={4}
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
