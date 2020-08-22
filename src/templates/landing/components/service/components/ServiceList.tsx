import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoBlock from './InfoBlock'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'

type ListItem = {
  key: string
  title: string
  text: string
  paddingTop?: number
  color: {
    group: string
    color: string
  }
  buttonLabel: string
  imageSize: number
  Artifacts: () => ReactElement<any, any>
}

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
      service1Map: file(relativePath: { eq: "lading/service1/map.png" }) {
        childImageSharp {
          fluid(maxWidth: 696) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      service1MapDate: file(
        relativePath: { eq: "lading/service1/map-date.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 199) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
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

  const list = getConfigList()

  return (
    <div key='service-list' style={styles.root}>
      {list.map(renderRow(images))}
    </div>
  )
}

const Image = ({ image, size }) => (
  <Img fluid={image} style={{ maxWidth: size, width: '100%' }} />
)

function renderRow(images) {
  return (item: ListItem, index: number): ReactElement<any, any> => {
    const isEven = (index + 1) % 2 === 0

    return (
      <div
        key={item.key}
        style={{
          ...rowStyles.root,
          paddingTop: item.paddingTop || 0,
          position: 'relative',
          justifyContent: !isEven ? 'flex-end' : 'flex-start',
        }}
      >
        {!isEven && [
          <InfoBlock
            isEven={false}
            item={item}
            icon={images[`${item.key}Icon`].childImageSharp.fixed}
          />,
          <Image
            image={images[item.key].childImageSharp.fluid}
            size={item.imageSize}
          />,
          <item.Artifacts />,
        ]}
        {isEven && [
          <Image
            image={images[item.key].childImageSharp.fluid}
            size={item.imageSize}
          />,
          <InfoBlock
            isEven
            item={item}
            icon={images[`${item.key}Icon`].childImageSharp.fixed}
          />,
          <item.Artifacts />,
        ]}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 477,
            zIndex: -1,
            background:
              'linear-gradient(102.33deg, rgba(246, 249, 251, 0) 4.99%, rgba(245, 248, 251, 0.21) 62.88%, #F5F8FB 98.08%)',
            transform: isEven ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
          }}
        ></div>
      </div>
    )
  }
}

const filter = 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))'

function MapIcon1() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 1006,
        filter,
      }}
    >
      <svg
        width='40'
        height='40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='20' fill='#7177C2' />
        <circle cx='19.999' cy='19.999' r='16.191' fill='#5A60A6' />
        <path
          d='M23.692 20.35a4.828 4.828 0 10-7.385 0l2.131 2.664a2 2 0 003.123 0l2.131-2.663zM20 15.73a1.513 1.513 0 110 3.025 1.513 1.513 0 010-3.026zM19.998 27.863c1.6 0 2.897-.433 2.897-.966 0-.533-1.297-.965-2.897-.965-1.6 0-2.896.432-2.896.965 0 .534 1.296.966 2.896.966z'
          fill='#fff'
        />
      </svg>
    </div>
  )
}

function MapIcon2() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 1026,
        bottom: 19,
        filter,
      }}
    >
      <svg
        width='32'
        height='32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='16' cy='16' r='16' fill='#FE958C' />
        <circle cx='15.999' cy='15.999' r='12.952' fill='#FC7266' />
        <path
          d='M18.953 16.28a3.862 3.862 0 10-5.908 0l1.392 1.741a2 2 0 003.124 0l1.392-1.74zM16 12.585a1.21 1.21 0 110 2.42 1.21 1.21 0 010-2.42zM15.997 22.291c1.28 0 2.317-.346 2.317-.773 0-.426-1.037-.772-2.317-.772-1.28 0-2.317.346-2.317.773 0 .426 1.037.772 2.317.772z'
          fill='#fff'
        />
      </svg>
    </div>
  )
}

function MapIcon3() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 1337,
        bottom: 91,
        filter,
      }}
    >
      <svg
        width='30'
        height='30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='15' cy='15' r='15' fill='#97BFAB' />
        <circle cx='14.998' cy='15' r='12.143' fill='#5B9976' />
        <path
          d='M17.77 15.263a3.62 3.62 0 10-5.54 0l1.208 1.51a2 2 0 003.123 0l1.208-1.51zM15 11.797a1.135 1.135 0 110 2.27 1.135 1.135 0 010-2.27zM15 20.898c1.2 0 2.173-.325 2.173-.725 0-.4-.972-.724-2.172-.724-1.2 0-2.173.324-2.173.724 0 .4.973.725 2.173.725z'
          fill='#fff'
        />
      </svg>
    </div>
  )
}

function getConfigList(): ListItem[] {
  return [
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
      Artifacts: () => (
        <>
          <MapIcon1 />
          <MapIcon2 />
          <MapIcon3 />
          <CircleArtifact
            name={CircleName.Blue}
            mainSize={40}
            centerSize={8}
            left='31.875%'
            top={600}
          />
          <DotsArtifact
            top={-3}
            right={85}
            columns={8}
            // prettier-ignore
            list={[
              0,0,0,0,0,1,0,0,
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
            ]}
          />
          <DotsArtifact
            left={697}
            bottom={25}
            columns={4}
            // prettier-ignore
            list={[
              1,0,0,0,
              0,0,0,0,
              0,0,0,0,
              0,1,0,0,
              0,0,0,0,
              0,0,0,0,
              0,1,1,0,
              0,0,0,0,
            ]}
          />
        </>
      ),
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
      paddingTop: 172,
      Artifacts: () => (
        <>
          <DotsArtifact
            top={204}
            left={98}
            columns={8}
            size={6.75}
            gap={32.15}
            // prettier-ignore
            list={[
            0,1,1,0,0,0,0,0,
            0,0,0,0,0,0,1,0,
            0,0,0,0,0,0,0,0,
            1,0,0,0,0,0,0,0,
          ]}
          />
          <DotsArtifact
            top={172}
            right={26}
            columns={4}
            size={4.71}
            gap={22.45}
            // prettier-ignore
            list={[
            0,1,1,0,
            0,0,0,0,
            0,0,0,1,
            1,0,0,0,
          ]}
          />
          <DotsArtifact
            top={680}
            right={665}
            columns={4}
            size={3.69}
            gap={17.57}
            // prettier-ignore
            list={[
            0,0,0,0,
            0,0,1,0,
            0,0,0,0,
            0,0,0,0,
            0,0,1,0,
            1,0,0,0,
            1,0,0,0,
            0,0,0,1,
          ]}
          />
          <CircleArtifact
            name={CircleName.Violet}
            mainSize={38}
            centerSize={6.79}
            top={634}
            left='92%'
          />
        </>
      ),
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
      paddingTop: 207,
      imageSize: 682,
      Artifacts: () => (
        <>
          <DotsArtifact
            top={468}
            left={24}
            columns={3}
            size={3.74}
            gap={17.8}
            // prettier-ignore
            list={[
              0,0,0,
              1,1,0,
              0,0,0,
              0,0,0,
              0,1,0,
              0,0,0,
              0,0,0,
              0,0,1,
            ]}
          />
          <DotsArtifact
            top={156}
            left={1066}
            columns={8}
            size={5.74}
            gap={27.36}
            // prettier-ignore
            list={[
              0,0,0,0,0,0,0,1,
              0,1,0,0,1,0,0,0,
              0,0,0,0,0,0,0,0,
              0,0,0,0,0,1,1,0,
            ]}
          />
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={26}
            centerSize={5.2}
            top={98}
            left='21.3125%'
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={42}
            centerSize={8.4}
            top={327}
            left='46.875%'
          />
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={28}
            centerSize={5.6}
            top={182}
            left='85.5%'
          />
        </>
      ),
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
      paddingTop: 109,
      imageSize: 754,
      Artifacts: () => (
        <>
          <DotsArtifact
            top={175}
            left={116}
            columns={8}
            size={4.28}
            gap={20.4}
            // prettier-ignore
            list={[
              0,0,0,0,0,0,0,1,
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
            ]}
          />
          <DotsArtifact
            top={389}
            left={1520}
            columns={2}
            size={8.11}
            gap={38.65}
            // prettier-ignore
            list={[
              0,0,
              0,1,
              0,0,
              0,0,
              0,0,
              1,0,
              1,0,
              0,0,
            ]}
          />
          <DotsArtifact
            top={640}
            left={620}
            columns={4}
            size={4.28}
            gap={20.4}
            // prettier-ignore
            list={[
              1,0,0,0,
              1,0,0,0,
              0,0,0,1,
            ]}
          />
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={40}
            centerSize={8}
            top={70}
            left='9.25%'
          />
          <CircleArtifact
            name={CircleName.Blue}
            mainSize={30}
            centerSize={6}
            top={190}
            left='91.5625%'
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={56}
            centerSize={11.2}
            top={660}
            left='61.25%'
          />
        </>
      ),
    },
  ]
}
