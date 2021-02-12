import React, { ReactElement } from 'react'

import { FeatureItem } from './FeatureItem'
import featureListStyles from './FeatureList.module.css'
import {
  CustomerNotificationsIcon,
  DispatchingIcon,
  JobManagementIcon,
  MultiVisitIcon,
  NotificationsIcon,
  ProofServiceIcon,
  SimpleSchedulingIcon,
  TechnicianStatusIcon,
} from './Icons'

export default function FeatureList(): ReactElement {
  return (
    <div className={featureListStyles.root}>
      <FeatureItem
        icon={SimpleSchedulingIcon}
        title='Simple Scheduling'
        text='Schedule an appointment with an available mobile field service technician with drag-and-drop appointments.'
      />
      <FeatureItem
        icon={DispatchingIcon}
        title='Dispatching'
        text='See all open or unassigned jobs, manage job ticketing, and notify technicians of new jobs, all in near real-time.'
      />
      <FeatureItem
        icon={JobManagementIcon}
        title='Job Management'
        text='Add customer information and job details, including job type, customer address and contact information.'
      />
      <FeatureItem
        icon={NotificationsIcon}
        title='Notifications'
        text='Receive a notification when a job has not been viewed by a technician and find out if there is a delay.'
      />
      <FeatureItem
        icon={TechnicianStatusIcon}
        title='Technician Status'
        text='View a list of jobs for the day and important details. Report on job status – in progress, paused or complete.'
      />
      <FeatureItem
        icon={ProofServiceIcon}
        title='Proof of Service'
        text='Capture job notes, photos and signatures from the field in the technician mobile app.'
      />
      <FeatureItem
        icon={CustomerNotificationsIcon}
        title='Customer Notifications'
        text='Send appointment reminders and confirmations to customers and provide ETA notifications via email or text message.'
      />
      <FeatureItem
        icon={MultiVisitIcon}
        title='Multi-Technician and Multi-Visit'
        text='Schedule jobs that require multiple technicians for large jobs or multiple visits (consecutive or non-consecutive).'
      />
    </div>
  )
}
