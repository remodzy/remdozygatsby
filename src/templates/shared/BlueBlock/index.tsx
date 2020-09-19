import React from 'react'

import { getColor } from '~utils/colors'
import Button from '~components/button'
import DotsArtifact from '~components/dot'

import blueBlockStyles from './BlueBlock.module.css'
import { useDeviceDetect } from '~utils/hooks'

const colors = getColor({ group: 'main', color: 'primary' })

export default function BlueBlock() {
  const { isMobile } = useDeviceDetect()

  return (
    <div className={blueBlockStyles.root}>
      <div className={blueBlockStyles.wrapper}>
        <div className={blueBlockStyles.title}>
          Field service management software
        </div>
        <div className={blueBlockStyles.form}>
          <div className={blueBlockStyles.inputWrapper}>
            <input
              type='text'
              name='email'
              id='email'
              className={blueBlockStyles.input}
              placeholder='Enter your email'
            />
          </div>
          <div className={blueBlockStyles.buttonWrapper}>
            <Button
              label='Get Started'
              colors={{
                background: '#ffffff',
                text: colors.main,
              }}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
      {isMobile ? <MobileArtifacts /> : <DesktopArtifacts />}
    </div>
  )
}

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
        top={17}
        left={95}
        columns={4}
        size={5.58}
        gap={27.57}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
      0,1,0,0,
      1,0,0,0,
      0,0,1,0,
      0,0,0,0,
    ]}
      />
      <DotsArtifact
        top={238}
        left={247}
        columns={4}
        size={6.88}
        gap={32.77}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
        zIndex={1}
        opacity={0.2}
        // prettier-ignore
        list={[
      0,0,0,0,
      0,1,0,0,
      0,0,0,1,
      0,0,1,0,
      0,0,0,0,
    ]}
      />
      <DotsArtifact
        top={189}
        right={31}
        columns={5}
        size={8.52}
        gap={40.58}
        background={{
          default: '#ffffff',
          primary: 'hsla(0,0%,100%,0.6)',
        }}
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
    </>
  )
}
