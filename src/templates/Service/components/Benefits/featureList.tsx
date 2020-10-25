import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import featureListStyles from './FeatureList.module.css'
import { FeatureItem } from './featureItem'

export default function FeatureList() {
  const images = useStaticQuery(query)

  return (
    <div className={featureListStyles.root}>
      <FeatureItem
        image={images.scheduling.childImageSharp.fixed}
        title='Simple Scheduling'
        text='Schedule an appointment with an available mobile field service technician with drag-and-drop appointments.'
      />
      <FeatureItem
        image={images.dispatching.childImageSharp.fixed}
        title='Dispatching'
        text='See all open or unassigned jobs, manage job ticketing, and notify technicians of new jobs, all in near real-time.'
      />
      <FeatureItem
        image={images.management.childImageSharp.fixed}
        title='Job Management'
        text='Add customer information and job details, including job type, customer address and contact information.'
      />
      <FeatureItem
        image={images.notifications.childImageSharp.fixed}
        title='Notifications'
        text='Receive a notification when a job has not been viewed by a technician and find out if there is a delay.'
      />
      <FeatureItem
        image={images.technicalStatus.childImageSharp.fixed}
        title='Technician Status'
        text='View a list of jobs for the day and important details. Report on job status – in progress, paused or complete.'
      />
      <FeatureItem
        image={images.proofService.childImageSharp.fixed}
        title='Proof of Service'
        text='Capture job notes, photos and signatures from the field in the technician mobile app.'
      />
      <FeatureItem
        image={images.customerNotifications.childImageSharp.fixed}
        title='Customer Notifications'
        text='Send appointment reminders and confirmations to customers and provide ETA notifications via email or text message.'
      />
      <FeatureItem
        image={images.multiVisit.childImageSharp.fixed}
        title='Multi-Technician and Multi-Visit'
        text='Schedule jobs that require multiple technicians for large jobs or multiple visits (consecutive or non-consecutive).'
      />
    </div>
  )
}

const query = graphql`
  query {
    scheduling: file(relativePath: { eq: "service/icons/scheduling.png" }) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    dispatching: file(relativePath: { eq: "service/icons/dispatching.png" }) {
      childImageSharp {
        fixed(width: 26) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    management: file(relativePath: { eq: "service/icons/management.png" }) {
      childImageSharp {
        fixed(width: 26) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    notifications: file(
      relativePath: { eq: "service/icons/notifications.png" }
    ) {
      childImageSharp {
        fixed(width: 26) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    technicalStatus: file(
      relativePath: { eq: "service/icons/technical-status.png" }
    ) {
      childImageSharp {
        fixed(width: 26) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    proofService: file(
      relativePath: { eq: "service/icons/proof-service.png" }
    ) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    customerNotifications: file(
      relativePath: { eq: "service/icons/customer-notifications.png" }
    ) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    multiVisit: file(relativePath: { eq: "service/icons/multi-visit.png" }) {
      childImageSharp {
        fixed(width: 28) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
