import React from 'react'

import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import { ListItem } from './ServiceList'
import { MapIcon1, MapIcon2, MapIcon3 } from './MapIcons'

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
      OutMobileArtifacts: () => <></>,
      InMobileArtifacts: () => (
        <>
          <MapIcon1 isMobile />
          <MapIcon2 isMobile />
          <MapIcon3 isMobile />
          <DotsArtifact
            top={290}
            right='2.5%'
            columns={5}
            size={3}
            gap={15.07}
            // prettier-ignore
            list={[
              0,0,0,0,0,
              0,1,0,0,1,
              0,1,0,0,0,
              0,0,0,0,0,
            ]}
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={30}
            centerSize={6}
            left='70.93%'
            bottom={85}
          />
        </>
      ),
      OutDesktopArtifacts: () => <></>,
      InDesktopArtifacts: () => (
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
      OutMobileArtifacts: () => (
        <>
          <DotsArtifact
            bottom={-28}
            right='18.0453%'
            columns={4}
            size={3}
            gap={14.04}
            zIndex={1}
            // prettier-ignore
            list={[
              1,0,0,0,
              0,0,0,1,
              0,0,0,1,
              0,1,0,0,
              0,0,0,0,
              0,0,0,0,
              0,1,1,0,
              0,0,0,0,
            ]}
          />
        </>
      ),
      InMobileArtifacts: () => (
        <>
          <DotsArtifact
            top={250}
            right='19.797%'
            columns={8}
            size={3}
            gap={15.07}
            // prettier-ignore
            list={[
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,1,1,0,
            ]}
          />
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={54}
            centerSize={10.8}
            top={430}
            left='92%'
          />
        </>
      ),
      OutDesktopArtifacts: () => (
        <>
          <DotsArtifact
            bottom={284}
            right={-27}
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
        </>
      ),
      InDesktopArtifacts: () => (
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
      OutMobileArtifacts: () => <></>,
      InMobileArtifacts: () => (
        <>
          <DotsArtifact
            top={300}
            left='34.408%'
            columns={8}
            size={3}
            gap={14.04}
            // prettier-ignore
            list={[
              0,0,0,0,0,0,0,0,
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,1,1,0,
            ]}
          />
          <CircleArtifact
            name={CircleName.Violet}
            mainSize={38}
            centerSize={6.79}
            bottom={11}
            left='70.4%'
          />
        </>
      ),
      OutDesktopArtifacts: () => (
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
      InDesktopArtifacts: () => (
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
      OutMobileArtifacts: () => (
        <>
          <CircleArtifact
            name={CircleName.Purple}
            mainSize={46}
            centerSize={9.2}
            bottom={-23}
            left='65.33%'
          />
        </>
      ),
      InMobileArtifacts: () => (
        <>
          <DotsArtifact
            top={68}
            left='1.9947%'
            columns={5}
            size={4}
            gap={16.12}
            // prettier-ignore
            list={[
              0,0,0,0,1,
              0,1,0,0,0,
              0,0,0,0,0,
              0,0,0,0,0,
            ]}
          />
          <DotsArtifact
            top={340}
            right='2.6373%'
            columns={7}
            size={4}
            gap={16.12}
            zIndex={1}
            // prettier-ignore
            list={[
              0,0,0,0,0,0,0,
              0,1,0,0,1,0,0,
              0,1,0,0,0,0,0,
              0,0,0,0,0,1,1,
            ]}
          />
        </>
      ),
      OutDesktopArtifacts: () => (
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
      InDesktopArtifacts: () => (
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
