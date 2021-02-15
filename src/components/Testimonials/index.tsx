import React, { memo, ReactElement } from 'react'

import SectionLabel from '../SectionLabel'
import RSectionTitle from '../RSectionTitle'
import Artifacts from './Artifacts'
import styles from './Testimonials.module.css'
import RSection from '~components/RSection'

const Testimonials = (): ReactElement => (
  <RSection artifacts={Artifacts}>
    <div className={styles.root}>
      <div className={styles.header}>
        <SectionLabel text='testimonials' color='success' />
        <RSectionTitle>What People Say</RSectionTitle>
      </div>
      <div className={styles.slide}>
        <div className={styles.slideContent}>
          <Info />
          <SlideImage1 />
        </div>
      </div>
    </div>
  </RSection>
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
      <picture>
        <source
          srcSet='/images/testimonials/m-testimonials-slide-1.png'
          media='(max-width: 678px)'
        />
        <img src='/images/testimonials/testimonials-slide-1.png' alt='' />
      </picture>
    </div>
  )
}
