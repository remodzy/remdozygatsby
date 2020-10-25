import * as React from 'react'

import styles from './RangeSlider.module.css'

type Props = {
  min?: number
  max?: number
  value?: number
  handleChange: (e: any) => void
}

const RangeSlider: React.FC<Props> = ({
  min = 1,
  max = 100,
  value = 20,
  handleChange,
}) => {
  const backgroundSize = ((value - min) * 100) / (max - min) + '% 100%'
  return (
    <div className={styles.root}>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        className={styles.slider}
        id='myRange'
        onChange={handleChange}
        style={{ backgroundSize }}
      />
    </div>
  )
}

export default RangeSlider
