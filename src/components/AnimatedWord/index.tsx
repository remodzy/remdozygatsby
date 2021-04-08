import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useInterval, useTimeoutFn } from 'react-use'

import * as styles from './AnimatedWord.module.css'

type Props = {
  colors?: string[]
  words: string[]
  speed?: number
  animSpeed?: number
}

export const AnimatedWord = ({
  colors = ['#000'],
  words,
  speed = 4000,
  animSpeed = 2000,
}: Props): ReactElement => {
  const [initialized, setInitialized] = useState(false)
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

  function setWidth() {
    if (
      enterWrapper.current &&
      exitWrapper.current &&
      containerWrapper.current
    ) {
      const { width: enterWidth } = enterWrapper.current.getBoundingClientRect()
      containerWrapper.current.style.width = `calc(${enterWidth}px + 1.7rem)`
    }
  }

  useEffect(() => {
    if (initialized) {
      setWidth()
    }
  }, [slideEnter])

  useTimeoutFn(() => {
    setWidth()
    setSlideEnter(words[0])
    setInitialized(true)
  }, 200)

  return (
    <span
      ref={containerWrapper}
      className={`${styles.container} ${
        initialized ? '' : styles.containerInit
      }`}
    >
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
          } ${initialized ? '' : styles.initExit}`}
        >
          {slideExit || words[1]}
        </span>
      </div>
    </span>
  )
}
