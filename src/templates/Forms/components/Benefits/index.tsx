import React, { ReactElement } from 'react'

import RoxContainer from '~components/RoxContainer'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import styles from './Benefits.module.css'
import ControlList from './ControlList'

export default function Benefits(): ReactElement {
  return (
    <div className={styles.root}>
      <RoxContainer>
        <div className={styles.wrapper}>
          <SectionLabel text='Benefits' color='primary' />
          <SectionTitle text='Variety Of Controls' />
          <ControlList />
        </div>
      </RoxContainer>
    </div>
  )
}
