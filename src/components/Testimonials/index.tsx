import React, { memo, ReactElement } from 'react'

import GridRow from '../GridRow'
import RoxContainer from '../RoxContainer'
import SectionLabel from '../SectionLabel'
import SectionTitle from '../SectionTitle'
import Artifacts from './Artifacts'
import styles from './Testimonials.module.css'

const Testimonials = (): ReactElement => (
  <div className={styles.root}>
    <SectionLabel text='testimonials' color='success' />
    <SectionTitle text='What People Say' />
    <RoxContainer>
      <GridRow>
        <Info />
        <SlideImage1 />
      </GridRow>
    </RoxContainer>
    <Artifacts />
  </div>
)

export default memo(Testimonials)

function Info() {
  return (
    <div className={styles.infoRoot}>
      <div className={styles.infoText}>
        Capture job notes, photos and signatures from the field in the
        technician mobile app.
      </div>
      <div className={styles.infoAuthor}>Jon Thomas</div>
      <div className={styles.infoWork}>CEO, Dell</div>
    </div>
  )
}
function SlideImage1() {
  return (
    <div>
      <img src='/images/testimonials/testimonials-slide-1.png' alt='' />
    </div>
  )
}
