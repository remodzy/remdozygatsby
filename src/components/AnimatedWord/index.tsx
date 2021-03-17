import * as extra from 'extra-array'
import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { animated, config, useTransition } from 'react-spring'
import { useInterval, useTimeoutFn } from 'react-use'

import styles from './AnimatedWord.module.css'

const toList = (array: string[], from: number) =>
  array.map((word, index) => ({ text: word, key: index + from }))

type Props = {
  colors?: string[]
  words: string[]
  speed?: number
  animSpeed?: number
}
const AnimatedWord = ({
  colors = ['#000'],
  words,
  speed = 4000,
}: Props): ReactElement => {
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
    config: config.molasses,
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

const AnimatedWord2 = ({
  colors = ['#000'],
  words,
  speed = 4000,
  animSpeed = 2000,
}: Props): ReactElement => {
  const enterWrapper = useRef() as MutableRefObject<HTMLSpanElement>
  const exitWrapper = useRef() as MutableRefObject<HTMLSpanElement>
  const containerWrapper = useRef() as MutableRefObject<HTMLSpanElement>
  const [currentState, setCurrentState] = useState<'enter' | 'exit'>('enter')
  const [slideEnter, setSlideEnter] = useState('')
  const [slideExit, setSlideExit] = useState('')
  const [slideEnterColor, setSlideEnterColor] = useState('')
  const [slideExitColor, setSlideExitColor] = useState('')
  const [index, setIndex] = useState(0)
  useInterval(() => {
    setCurrentState('enter')
    setSlideEnter(words[index === words.length - 1 ? 0 : index + 1])
    setSlideExit(words[index])
    setSlideEnterColor(colors[index === colors.length - 1 ? 0 : index + 1])
    setSlideExitColor(colors[index])
    setIndex(state => (state + 1) % words.length)
  }, speed)
  useInterval(
    () => {
      setCurrentState('exit')
    },
    currentState === 'enter' ? animSpeed : null
  )

  useEffect(() => {
    if (
      enterWrapper.current &&
      exitWrapper.current &&
      containerWrapper.current
    ) {
      const { width: enterWidth } = enterWrapper.current.getBoundingClientRect()
      containerWrapper.current.style.width = `calc(${enterWidth}px + 1.6rem)`
    }
  }, [slideEnter])

  useTimeoutFn(() => {
    setSlideEnter(words[0])
  }, 100)

  return (
    <span className='sc-7ffnpo-9 ceDraP'>
      <span ref={containerWrapper} className={styles.container}>
        <div className={styles.divWrapper}>
          <span
            ref={enterWrapper}
            style={{ color: slideEnterColor || colors[0] }}
            className={`${styles.spanWrapper} ${styles.slideEnter} ${
              currentState === 'enter'
                ? styles.slideEnterActive
                : styles.slideEnterDone
            }`}
          >
            {slideEnter || words[0]}
          </span>
          <span
            ref={exitWrapper}
            style={{ color: slideExitColor || colors[1] }}
            className={`${styles.spanWrapper} ${styles.slideExit} ${
              currentState === 'enter'
                ? styles.slideExitActive
                : styles.slideExitDone
            }`}
          >
            {slideExit || words[1]}
          </span>
        </div>
      </span>
    </span>
  )
}

export { AnimatedWord2 as AnimatedWord }
