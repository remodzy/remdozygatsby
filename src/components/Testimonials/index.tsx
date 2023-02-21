import useInterval from '@rooks/use-interval'
import { injectIntl } from 'gatsby-plugin-react-intl'
import React, { memo, useCallback, useState } from 'react'
import { IntlShape } from 'react-intl/src/types'
import { useTransition } from 'react-spring'

import Icon from '~components/Icons'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'
import {
  avatarPages,
  miniAvatarPages,
} from '~components/Testimonials/avatarPages'

import Artifacts from './Artifacts'
import { infoPages } from './infoPages'
import { logoPages } from './logoPages'
import * as styles from './Testimonials.module.css'

const SimpleSlider = ({
  count,
  selected,
}: {
  count: number
  selected?: number
}): JSX.Element => (
  <div className={styles.pointsRoot}>
    {Array.from(Array(count).keys()).map(i => (
      <Icon
        key={i}
        name={i === selected ? 'pointFilled' : 'pointEmpty'}
        className={styles.point}
      />
    ))}
  </div>
)

type Props = {
  intl: IntlShape
}

const Testimonials: React.FC<Props> = ({ intl }) => {
  const testimonialsCount = 4
  const [index, set] = useState(0)
  const onClick = useCallback(
    () => set(state => (state + 1) % testimonialsCount),
    []
  )
  const { start, stop } = useInterval(
    () => {
      set(state => (state + 1) % testimonialsCount)
    },
    4000,
    true
  )
  const infoTransitions = useTransition(index, p => p, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'relative',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'relative',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      position: 'absolute',
    },
  })
  const avatarTransitions = useTransition(index, p => p, {
    from: {
      opacity: 0,
      position: 'relative',
    },
    enter: {
      opacity: 1,
      position: 'relative',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      //right: 0,
      //left: 0,
    },
  })
  const slideTransitions = useTransition(index, p => p, {
    from: { opacity: 1 /*transform: "translate3d(0%, 0px, 0px)"*/ },
    enter: { opacity: 0 /*transform: "translate3d(-25%, 0px, 0px)"*/ },
    leave: { opacity: 0 /*transform: "translate3d(25%, 0px, 0px)"*/ },
  })

  return (
    <RSection artifacts={Artifacts}>
      <div className={styles.root}>
        <div className={styles.header}>
          <SectionLabel text='testimonials' color='success' />
          <RSectionTitle>
            {intl.formatMessage({ id: 'what_people_say' })}
          </RSectionTitle>
        </div>
        <div className={styles.slide} onClick={onClick}>
          <div className={styles.slideContent}>
            <div className={styles.infoRoot}>
              {infoTransitions.map(({ item, props, key }) => {
                const Info = infoPages[item]
                return <Info key={key} style={props} />
              })}
            </div>
            <div className={styles.slideRoot}>
              {avatarTransitions.map(({ item, props, key }) => {
                const Avatar = avatarPages[item]
                return <Avatar key={key} style={props} logo={logoPages[item]} />
              })}
              {slideTransitions.map(({ item, props, key }) => {
                const MiniAvatar = miniAvatarPages
                return <MiniAvatar key={key} style={props} active={item} />
              })}
            </div>
          </div>
          <SimpleSlider count={testimonialsCount} selected={index} />
        </div>
      </div>
    </RSection>
  )
}

export default memo(injectIntl(Testimonials))
