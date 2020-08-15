import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoBlock from '../InfoBlock'

type ListItem = {
  key: string
  title: string
  text: string
  color: {
    group: string
    color: string
  }
  buttonLabel: string
  imageSize: number
}

const list: ListItem[] = [
  {
    key: 'settings',
    title: 'In the field, at the office, in control',
    text:
      'Respond to customer requests with greater visibility of technicians and job status using field service software. Have everyone log in to one system to avoid project management using separate calendars and spreadsheets to increase productivity at the job site and in the back office.',
    color: {
      group: 'sub',
      color: 'fourth',
    },
    buttonLabel: 'Learn More',
    imageSize: 766,
  },
  {
    key: 'calendar',
    title: 'Simplify scheduling with an easy-to-use calendar',
    text:
      'See which field workers are available, schedule service calls and jobs, add customer information and include job details. If a job changes, drag and drop it to a new date and time, and the field technician is notified of the update.',
    color: {
      group: 'main',
      color: 'success',
    },
    buttonLabel: 'Learn More',
    imageSize: 789,
  },
  {
    key: 'communicate',
    title: 'Easily communicate with field technicians',
    text:
      'Dispatch jobs directly to techs and allow them to set job status. Field staff can see their schedule and collect signatures, photos and notes – all from the mobile application.',
    color: {
      group: 'sub',
      color: 'fifth',
    },
    buttonLabel: 'Learn More',
    imageSize: 682,
  },
  {
    key: 'messaging',
    title: 'Messaging',
    text:
      'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
    color: {
      group: 'sub',
      color: 'seventh',
    },
    buttonLabel: 'Learn More',
    imageSize: 754,
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
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default function ServiceList() {
  const images = useStaticQuery(graphql`
    query {
      settings: file(relativePath: { eq: "landing/settings-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 766) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      calendar: file(relativePath: { eq: "landing/calendar-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 789) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      communicate: file(relativePath: { eq: "landing/communicate-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 682) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      messaging: file(relativePath: { eq: "landing/messaging-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 754) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      settingsIcon: file(relativePath: { eq: "landing/icons/settings.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }

      calendarIcon: file(relativePath: { eq: "landing/icons/calendar.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }

      communicateIcon: file(relativePath: { eq: "landing/icons/worker.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }

      messagingIcon: file(relativePath: { eq: "landing/icons/messaging.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <div key='service-list' style={styles.root}>
      {list.map(renderRow(images))}
    </div>
  )
}

function renderRow(images) {
  return (item: ListItem, index: number): ReactElement<any, any> => {
    const Icon = () => (
      <Img fixed={images[`${item.key}Icon`].childImageSharp.fixed} />
    )
    const Image = () => (
      <Img
        fluid={images[item.key].childImageSharp.fluid}
        style={{ maxWidth: item.imageSize, width: '100%' }}
      />
    )
    const isEven = (index + 1) % 2 === 0
    const Info = ({ isEven }) => (
      <InfoBlock isEven={isEven} item={item} icon={Icon} />
    )
    return (
      <div
        key={item.key}
        style={{
          ...rowStyles.root,
          justifyContent: !isEven ? 'flex-end' : 'flex-start',
          background:
            'linear-gradient(102.33deg, rgba(246, 249, 251, 0) 4.99%, rgba(245, 248, 251, 0.21) 62.88%, #F5F8FB 98.08%)',
        }}
      >
        {!isEven && (
          <>
            <Info isEven={false} />
            <Image />
          </>
        )}
        {isEven && (
          <>
            <Image />
            <Info isEven />
          </>
        )}
      </div>
    )
  }
}
