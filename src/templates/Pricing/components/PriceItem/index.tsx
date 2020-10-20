import React, { useCallback, useEffect, useState } from 'react'

import Button from '~components/Button'
import RangeSlider from '~components/RangeSlider'
import { authorize } from '~utils/auth'
import { ListItem, Plans } from '../PriceList'

import styles from './PriceItem.module.css'

type Props = {
  item: ListItem
}

const PriceItem: React.FC<Props> = ({ item }) => {
  const {
    plan,
    price,
    period,
    employeesAmount,
    selected,
    infoLabel,
    showRange,
  } = item
  const [rangeValue, setRangeValue] = useState<number>(employeesAmount)
  const [amount, setAmount] = useState<number>(price?.amount || 0)

  useEffect(() => {
    const sale = period === 'Per Month' ? 1 : 0.8
    const months = period === 'Per Month' ? 1 : 12
    plan === Plans.growingBusiness
      ? setAmount(Math.round(rangeValue * 3 * months * sale))
      : setAmount(30 * months * sale)
  }, [item, rangeValue])

  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  const handleRangeChange = useCallback(e => {
    setRangeValue(e.target.value)
  }, [])

  return (
    <div className={`${styles.root} ${selected ? styles.active : ''}`}>
      <div className={styles.header}>
        <span className={styles.planLabel}>{plan}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.employeesAmount}>
          <div className={styles.employeesLabel}>Amount employees:</div>
          <div className={styles.employeesCount}>{rangeValue}</div>
        </div>
        <div className={styles.rangeContainer}>
          {showRange && (
            <RangeSlider value={rangeValue} handleChange={handleRangeChange} />
          )}
        </div>

        {!price && (
          <div className={styles.priceContainer}>
            <div className={styles.price}>Free</div>
            <div className={styles.period}>Free 30 Days</div>
          </div>
        )}
        {price && (
          <div className={styles.priceContainer}>
            <div className={styles.price}>
              <span className={styles.currency}>{price.currency}</span>
              <span>{amount}</span>
            </div>
            <div className={styles.period}>{period}</div>
          </div>
        )}
        <div className={styles.infoLabelContainer}>
          {infoLabel && <div className={styles.infoLabel}>{infoLabel}</div>}
        </div>
      </div>
      <div className={styles.footer}>
        {!selected && (
          <Button
            label='Get Started'
            className='fullWidth primary-btn'
            handleClick={handleSignUp}
          />
        )}
        {selected && (
          <Button
            label='Get Started'
            className='fullWidth disabled-btn'
            handleClick={handleSignUp}
          />
        )}
      </div>
    </div>
  )
}

export default PriceItem
