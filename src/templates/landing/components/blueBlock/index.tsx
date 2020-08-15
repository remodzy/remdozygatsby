import React from 'react'

import { getColor } from '../../../../utils/colors'
import Button from '../../../../components/button'

const colors = getColor({ group: 'main', color: 'primary' })
const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.main,
    padding: '90px 0',
  },
  title: {
    color: '#ffffff',
    fontWeight: 600,
    fontSize: 52,
    lineHeight: '63px',
    textAlign: 'center' as const,
  },
  form: {
    display: 'flex',
    marginTop: 60,
  },
  input: {
    height: 52,
    border: 0,
    borderRadius: 10,
    padding: '1px 10px',
    outline: 'none',
    marginRight: 18,
    flex: 1,
  },
}

export default function BlueBlock() {
  return (
    <div style={styles.root}>
      <div style={{ maxWidth: 610 }}>
        <div style={styles.title}>Field service management software</div>
        <div style={styles.form}>
          <input
            type='text'
            name='email'
            id='email'
            style={styles.input}
            placeholder='Enter your email'
          />
          <Button
            label='Get Started'
            colors={{
              background: '#ffffff',
              text: colors.main,
            }}
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}
