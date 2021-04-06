import React, { CSSProperties } from 'react'
import { animated } from 'react-spring'

import * as styles from './Testimonials.module.css'

const infoTemplate = (desc: string, author: string, company: string) => ({
  style,
}: {
  style: CSSProperties
}) => (
  <animated.div style={{ ...style }}>
    <div className={styles.infoText}>{desc}</div>
    <div className={styles.infoAuthor}>{author}</div>
    <div className={styles.infoWork}>{company}</div>
  </animated.div>
)

export const infoPages = [
  infoTemplate(
    'Capture job notes, photos and signatures from the field in the technician mobile app.',
    'Jon Thomas',
    'CEO, Dell'
  ),
  infoTemplate(
    "It's said these gems contain tenacious properties which make for a great defensive weapon.",
    'Tomáš Adamček',
    'CFO, Jupitelligence'
  ),
  infoTemplate(
    'The building is rectangular shaped. The house is fully surrounded by a patio.',
    'Nplooj Ger Xang',
    'CTO, Omegacoustics'
  ),
  infoTemplate(
    'Gorus itself is mainly covered in woodlands and has a warm climate.',
    'Pieter Cohen',
    'Chief Designer, Hercules Microsystems'
  ),
]
