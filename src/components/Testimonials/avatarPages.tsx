import React, { CSSProperties } from 'react'
import { animated } from 'react-spring'
import * as color from 'color'
import * as extra from 'extra-array'

import * as styles from './Testimonials.module.css'

const avatars = [
  {
    bgColor: '#0D69AB',
    src: '/images/testimonials/person1.png',
    angle: -45,
  },
  {
    bgColor: '#3ac0ff',
    src: '/images/testimonials/person2.png',
    angle: -17,
  },
  {
    bgColor: '#8ea8bb',
    src: '/images/testimonials/person3.png',
    angle: 17,
  },
  {
    bgColor: '#a2c49b',
    src: '/images/testimonials/person4.png',
    angle: 45,
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

export const avatarPages = avatars.map(avatar =>
  avatarTemplate(color(avatar.bgColor).lighten(0.3), avatar.src)
)

const miniAvatarTemplate = (
  images: { bgColor: string; src: string; angle: number }[]
) => ({ style, active }: { style: CSSProperties; active: number }) => (
  <div className={styles.personContainerSmallRoot}>
    {images.map((image, index) => (
      <animated.div key={index} style={index === active ? { ...style } : {}}>
        <div
          className={styles.personContainerSmall}
          style={{
            transform: `rotate(${image.angle}deg) translateX(21vw) rotate(${
              -image.angle - 5
            }deg)`,
          }}
        >
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
      </animated.div>
    ))}
  </div>
)

export const miniAvatarPages = miniAvatarTemplate(extra.rotate(avatars, 0))
