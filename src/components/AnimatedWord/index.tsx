import useInterval from '@rooks/use-interval'
import * as extra from 'extra-array'
import React, { ReactElement, useState } from 'react'
import { animated, config, useTransition } from 'react-spring'

import styles from './AnimatedWord.module.css'

const toList = (array: string[], from: number) =>
  array.map((word, index) => ({ text: word, key: index + from }))

type Props = {
  colors?: string[]
  words: string[]
  speed?: number
}
export function AnimatedWord({
  colors = ['#000'],
  words,
  speed = 4000,
}: Props): ReactElement {
  const [incr, setIncr] = useState(1)
  const [index, setIndex] = useState(0)
  const [items, setItems] = useState(toList([...words].splice(index, 1), 0))
  const { start, stop } = useInterval(
    () => {
      setItems(toList([...extra.rotate(words, 1)].splice(index, 1), incr))
      setIncr(incr + 1)
      setIndex(state => (state + 1) % words.length)
    },
    speed,
    true
  )
  const transitions = useTransition(items, item => item.key, {
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'perspective(600px) rotateX(90deg)',
      color: colors[0],
    },
    enter: {
      position: 'relative',
      opacity: 1,
      transform: 'perspective(600px) rotateX(0deg)',
      color: colors[0],
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      transform: 'perspective(600px) rotateX(180deg)',
      color: colors[0],
    },
    config: config.slow,
  })

  return (
    <span className={styles.wrapper} style={{ borderColor: colors[index] }}>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className={styles.anim}
          style={{
            ...props,
            color: colors[index],
          }}
        >
          {item.text}
        </animated.div>
      ))}
    </span>
  )
}
