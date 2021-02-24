import React from 'react'

import styles from './Testimonials.module.css'

const logoTemplate = (bgColor: string, src: string) => (
  <div className={styles.logoContainer} style={{ backgroundColor: bgColor }}>
    <img src={src} alt='' width='100%' height='100%' />
  </div>
)

export const logoPages = [
  logoTemplate('#0D69AB', '/images/testimonials/logo1.png'),
  logoTemplate('#3ac0ff', '/images/testimonials/logo2.png'),
  logoTemplate('#8ea8bb', '/images/testimonials/logo3.png'),
  logoTemplate('#a2c49b', '/images/testimonials/logo4.png'),
]
