import React, { ReactElement } from 'react'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import Button from '../../../../components/button'
import GlassesImage from './glassesImage'
import { getTextColor } from '../../../../utils/colors'
import DotsArtifact from '../../../../components/dot'
import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'

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
        size={6.32}
        gap={30.12}
        // prettier-ignore
        list={[
          1,0,0,0,
          0,0,0,1,
          0,0,0,1,
          0,1,0,0,
          0,0,0,0,
          0,0,0,0,
          0,1,1,0,
          0,0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={180}
        right={173}
        columns={8}
        zIndex={1}
        size={6.32}
        gap={30.12}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={54}
        centerSize={11}
        left='15%'
        top={492}
      />
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={38}
        centerSize={8}
        left='86.4375%'
        top={92}
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
