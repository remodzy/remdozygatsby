import React, { ReactElement } from 'react'

import { FeatureItem } from './FeatureItem'
import * as styles from './FeatureList.module.css'
import {
  AutomateIcon,
  BuilderIcon,
  ConnectAppIcon,
  OrchestrateIcon,
  SolutionsIcon,
} from './Icons'

export default function FeatureList(): ReactElement {
  return (
    <div className={styles.root}>
      <FeatureItem
        icon={ConnectAppIcon}
        title='Connect your key applications'
        text='Connect your apps to ensure an uninterrupted flow of information between them. Get emails, reports, records, and more to move across your apps automatically.'
      />
      <FeatureItem
        icon={AutomateIcon}
        title='Automate extensively with multi-step flows'
        text='Design flows to accomplish a whole series of routine tasks that would otherwise eat into your productive work time. Stay focused on the heart of your business.'
      />
      <FeatureItem
        icon={OrchestrateIcon}
        title='Orchestrate an efficient business'
        text='Work as a team on building workflows that connect information across departments. Coordinate with teammates and bring harmony to your business processes.'
      />
      <FeatureItem
        icon={BuilderIcon}
        title='Make it all happen on a dynamic builder'
        text='Stop spending your time and effort coding complex integrations. Easily set up a trigger and drop actions onto the builder to integrate your applications seamlessly.'
      />
      <FeatureItem
        icon={SolutionsIcon}
        title='Off-the-shelf solutions'
        text='View a list of jobs for the day and important details. Report on job status – in progress, paused or complete.'
      />
    </div>
  )
}
