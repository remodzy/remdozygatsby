import React, { CSSProperties } from 'react'
import { animated } from 'react-spring'
import * as color from 'color'
import * as extra from 'extra-array'

import styles from './Testimonials.module.css'

const avatars = [
  {
    bgColor: '#0D69AB',
    src: '/images/testimonials/person1.png',
  },
  {
    bgColor: '#3ac0ff',
    src: '/images/testimonials/person2.png',
  },
  {
    bgColor: '#8ea8bb',
    src: '/images/testimonials/person3.png',
  },
  {
    bgColor: '#a2c49b',
    src: '/images/testimonials/person4.png',
  },
]

const avatarTemplate = (bgColor: string, src: string) => ({
  style,
  logo,
}: {
  style: CSSProperties
  logo: JSX.Element
}) => (
  <animated.div className={styles.personContainerBigRoot} style={{ ...style }}>
    <div className={styles.personContainerBig}>
      <div
        className={styles.personContainerBigInner}
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={src}
          alt=''
          width='100%'
          height='100%'
          style={{ objectFit: 'contain' }}
        />
      </div>
      {logo}
    </div>
  </animated.div>
)

export const avatarPages = [
  avatarTemplate(
    color('#0D69AB').lighten(0.3),
    '/images/testimonials/person1.png'
  ),
  avatarTemplate(
    color('#3ac0ff').lighten(0.3),
    '/images/testimonials/person2.png'
  ),
  avatarTemplate(
    color('#8ea8bb').lighten(0.3),
    '/images/testimonials/person3.png'
  ),
  avatarTemplate(
    color('#a2c49b').lighten(0.3),
    '/images/testimonials/person4.png'
  ),
]

const miniAvatarTemplate = (images: { bgColor: string; src: string }[]) => ({
  style,
}: {
  style: CSSProperties
  logo: JSX.Element
}) => (
  <animated.div style={{ ...style }}>
    {images.map((image, index) => (
      <div key={index} className={styles.personContainerSmall}>
        <div
          className={styles.personContainerSmallInner}
          style={{ backgroundColor: image.bgColor }}
        >
          <img
            src={image.src}
            alt=''
            width='100%'
            height='100%'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    ))}
  </animated.div>
)

export const miniAvatarPages = [miniAvatarTemplate(extra.rotate(avatars, 0))]
