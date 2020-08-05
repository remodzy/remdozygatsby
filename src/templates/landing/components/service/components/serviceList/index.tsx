import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoBlock from '../InfoBlock'

const list = [
  {
    key: 'settings',
    icon: 'settings',
    title: 'In the field, at the office, in control',
    text:
      'Respond to customer requests with greater visibility of technicians and job status using field service software. Have everyone log in to one system to avoid project management using separate calendars and spreadsheets to increase productivity at the job site and in the back office.',
    color: {
      group: 'sub',
      color: 'third',
    },
    buttonLabel: 'Learn More',
  },
  {
    key: 'calendar',
    icon: 'calendar',
    title: 'Simplify scheduling with an easy-to-use calendar',
    text:
      'See which field workers are available, schedule service calls and jobs, add customer information and include job details. If a job changes, drag and drop it to a new date and time, and the field technician is notified of the update.',
    color: {
      group: 'main',
      color: 'success',
    },
    buttonLabel: 'Learn More',
  },
  {
    key: 'communicate',
    icon: 'communicate',
    title: 'Easily communicate with field technicians',
    text:
      'Dispatch jobs directly to techs and allow them to set job status. Field staff can see their schedule and collect signatures, photos and notes – all from the mobile application.',
    color: {
      group: 'sub',
      color: 'fifth',
    },
    buttonLabel: 'Learn More',
  },
  {
    key: 'messaging',
    icon: 'messaging',
    title: 'Messaging',
    text:
      'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
    color: {
      group: 'sub',
      color: 'seventh',
    },
    buttonLabel: 'Learn More',
  },
]

const styles = {
  root: {
    marginTop: 150,
  },
}

const rowStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default function ServiceList() {
  const data = useStaticQuery(graphql`
    query {
      settings: file(relativePath: { eq: "landing/settings-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      calendar: file(relativePath: { eq: "landing/calendar-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      communicate: file(relativePath: { eq: "landing/communicate-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      messaging: file(relativePath: { eq: "landing/messaging-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div key="service-list" style={styles.root}>
      {list.map(renderRow(data))}
    </div>
  )
}

function renderRow(images) {
  return (item, index) => {
    const image = images[item.key]
    const isEven = (index + 1) % 2 === 0
    const Info = () => <InfoBlock item={item} />
    return (
      <div key={item.key} style={rowStyles.root}>
        {!isEven && (
          <>
            <Info />
            <Img
              fluid={image.childImageSharp.fluid}
              style={{ width: '100%' }}
            />
          </>
        )}
        {isEven && (
          <>
            <Img
              fluid={image.childImageSharp.fluid}
              style={{ width: '100%' }}
            />
            <Info />
          </>
        )}
      </div>
    )
  }
}
