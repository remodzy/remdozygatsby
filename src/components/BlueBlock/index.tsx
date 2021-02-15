import React, { ReactElement } from 'react'

import Button from '~components/Button'
import { getColor } from '~utils/colors'

import Artifacts from './Artifacts'
import styles from './BlueBlock.module.css'

const colors = getColor({ group: 'main', color: 'primary' })

export default function BlueBlock(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Stay up to date with Updates</div>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type='text'
              name='email'
              id='email'
              className={styles.input}
              placeholder='Enter your email'
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              label='Subscribe'
              colors={{
                background: '#ffffff',
                text: colors.main,
              }}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
      <Artifacts />
    </div>
  )
}
