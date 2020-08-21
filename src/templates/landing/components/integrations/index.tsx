import React, { ReactElement } from 'react'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import Button from '../../../../components/button'
import GlassesImage from './glassesImage'
import { getTextColor } from '../../../../utils/colors'
import DotsArtifact from '../../../../components/dot'
import CircleArtifact from '../../../../components/circleArtifact'

const textColor = getTextColor()

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    paddingBottom: 100,
    position: 'relative' as const,
    marginTop: 195,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '182.3%',
    textAlign: 'center' as const,
    marginTop: 22,
    color: textColor.sub,
    maxWidth: 610,
  },
}

export default function Integrations(): ReactElement<any, any> {
  return (
    <div style={styles.root}>
      <SectionLabel text='INTEGRATIONS' />
      <SectionTitle text='Google Glass Remote Advisor' />
      <div style={styles.subTitle}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <GlassesImage />
      <Button
        className='primary-btn'
        label='Learn More'
        handleClick={() => {}}
      />
      <DotsArtifact
        top={106}
        left={148}
        columns={4}
        list={[
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
        ]}
      />
      <DotsArtifact
        bottom={180}
        right={173}
        columns={8}
        zIndex={1}
        list={[
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
        ]}
      />
      <CircleArtifact
        container={{
          width: 54,
          height: 54,
          left: 240,
          top: 492,
        }}
        primary={{
          background: 'linear-gradient(180deg, #CDE7DA 0%, #97BFAB 100%)',
        }}
        secondary={{
          width: 11,
          height: 11,
          background: '#5B9976',
        }}
      />
      <CircleArtifact
        container={{
          width: 38,
          height: 38,
          left: 1383,
          top: 92,
        }}
        primary={{
          background: 'linear-gradient(180deg, #E0C7F7 0%, #CB9EF3 100%)',
        }}
        secondary={{
          width: 8,
          height: 8,
          background: '#B98EE0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 764,
          background:
            'linear-gradient(180deg, rgba(246, 249, 251, 0) 0%, #F5F8FB 100%)',
          zIndex: -1,
        }}
      ></div>
    </div>
  )
}
