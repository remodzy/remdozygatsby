import React from 'react'

import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import { ListItem } from './ServiceList'

const filter = 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))'

export function getConfigList(): ListItem[] {
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
      paddingRight: '4.5%',
      OutArtifacts: () => <></>,
      InArtifacts: () => (
        <>
          <DotsArtifact
            top={-3}
            right='5.3125%'
            columns={8}
            // prettier-ignore
            list={[
              0,0,0,0,0,1,0,0,
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
            ]}
          />
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
            left='43.5625%'
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
      paddingLeft: '7.375%',
      OutArtifacts: () => (
        <DotsArtifact
          top={172}
          right='1.625%'
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
      ),
      InArtifacts: () => (
        <>
          <DotsArtifact
            top={20}
            left='6.125%'
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
            top={540}
            right='44.375%'
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
            top={430}
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
      paddingRight: '3.125%',
      imageSize: 682,
      OutArtifacts: () => (
        <DotsArtifact
          top={468}
          left='1.5%'
          columns={3}
          size={6.71}
          gap={31.97}
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
      ),
      InArtifacts: () => (
        <>
          <DotsArtifact
            top={-21}
            left='68.75%'
            columns={8}
            size={4.28}
            gap={20.04}
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
            top={-107}
            left='17%'
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={42}
            centerSize={8.4}
            top={120}
            left='57%'
          />
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={28}
            centerSize={5.6}
            top={-25}
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
      OutArtifacts: () => (
        <DotsArtifact
          top={389}
          right='2.8125%'
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
      ),
      InArtifacts: () => (
        <>
          <DotsArtifact
            top={110}
            left='1.25%'
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
            top={490}
            left='29.375%'
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
            top={-39}
            left='4%'
          />
          <CircleArtifact
            name={CircleName.Blue}
            mainSize={30}
            centerSize={6}
            top={25}
            left='84%'
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={56}
            centerSize={11.2}
            top={551}
            left='54%'
          />
        </>
      ),
    },
  ]
}

function MapIcon1() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: '62.875%',
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
        left: '64.125%',
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
        left: '83.5625%',
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
