import React, { useState } from 'react'
import { useInterval } from 'react-use'

import Icon from '../Icons'
import * as styles from './ZendeskButton.module.css'

type Props = any

const ZendeskButton: React.FC<Props> = () => {
  const [initialized, setInitialized] = useState(0)

  const loadZendesk = () => {
    ;(window as any).loadZendesk()
  }

  useInterval(
    () => {
      if (document.getElementById('launcher') !== null) {
        setInitialized(initialized + 1)
      }
    },
    initialized === 10 ? null : 100
  )

  return initialized === 10 ? (
    <></>
  ) : (
    <div onMouseOver={loadZendesk} className={styles.root}>
      <Icon name='question' />
    </div>
  )
}

export default ZendeskButton
