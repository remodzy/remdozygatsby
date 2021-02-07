import React, { ReactElement } from 'react'

import Button from '~components/Button'
import { getColor } from '~utils/colors'

import Artifacts from './Artifacts'
import blueBlockStyles from './styles.module.css'

const colors = getColor({ group: 'main', color: 'primary' })

export default function BlueBlock(): ReactElement {
  return (
    <div className={blueBlockStyles.root}>
      <div className={blueBlockStyles.wrapper}>
        <div className={blueBlockStyles.title}>
          Stay up to date with Updates
        </div>
        <div className={blueBlockStyles.form}>
          <div className={blueBlockStyles.inputWrapper}>
            <input
              type='text'
              name='email'
              id='email'
              className={blueBlockStyles.input}
              placeholder='Enter your email'
            />
          </div>
          <div className={blueBlockStyles.buttonWrapper}>
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
