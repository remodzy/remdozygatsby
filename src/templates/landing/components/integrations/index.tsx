import React, { ReactElement } from 'react'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import Button from '../../../../components/button'
import GlassesImage from './glassesImage'
import { getTextColor } from '../../../../utils/colors'

const textColor = getTextColor()

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    background:
      'linear-gradient(180deg, rgba(246, 249, 251, 0) 0%, #F5F8FB 100%)',
    paddingBottom: 100,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '182.3%',
    textAlign: 'center' as const,
    marginTop: 22,
    color: textColor.sub,
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
    </div>
  )
}
