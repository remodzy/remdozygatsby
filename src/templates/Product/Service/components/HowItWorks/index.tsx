import React from 'react'
import { isMobile } from 'react-device-detect'

import BlockWrapper from '~components/BlockWrapper'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import {
  InDesktopArtifacts,
  InMobileArtifacts,
  OutDesktopArtifacts,
  OutMobileArtifacts,
} from './Artifacts'
import * as styles from './HowItWorks.module.css'
import { FirstIcon, SecondIcon, ThirdIcon } from './Icons'
import { Item } from './item'

export default function HowItWorks() {
  return (
    <div className={styles.root}>
      <BlockWrapper>
        <SectionLabel text='How it works' color='warning' />
        <SectionTitle text='How RoxService works' />
        <div className={styles.itemsContainer}>
          <Item
            image={FirstIcon}
            text='Get an appointment confirmation and reminder via text message or email.'
          />
          <Item
            image={SecondIcon}
            text='Receive a notification when the technician is on the way.'
          />
          <Item
            image={ThirdIcon}
            text='Once a job is complete, submit a rating and review of the job and technician.'
          />
        </div>
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}
