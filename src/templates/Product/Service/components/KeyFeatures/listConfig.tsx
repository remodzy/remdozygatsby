import { ListItem } from '~components/RGrid'

import {
  CalendarIcon,
  GlassesIcon,
  MessageIcon,
  SettingsIcon,
  WorkerIcon,
} from './Icons'

export function getConfigList(): ListItem[] {
  return [
    {
      key: 'settings',
      title: 'In the field, at the office, in control',
      text:
        'Respond to customer requests with greater visibility of technicians and job status using field service software. Have everyone log in to one system to avoid project management using separate calendars and spreadsheets to increase productivity at the job site and in the back office.',
      colors: {
        background: '#FFF0E3',
        text: '#FB9D4B',
      },
      images: {
        desktop: '/images/service/service-features-1.png',
        mobile: '/images/service/m-service-features-1.png',
      },
      icon: SettingsIcon,
      link: '#',
    },
    {
      key: 'calendar',
      title: 'Simplify scheduling with an easy-to-use calendar',
      text:
        'See which field workers are available, schedule service calls and jobs, add customer information and include job details. If a job changes, drag and drop it to a new date and time, and the field technician is notified of the update.',
      colors: {
        background: '#EAF2EE',
        text: '#5B9976',
      },
      images: {
        desktop: '/images/service/service-features-2.png',
        mobile: '/images/service/m-service-features-2.png',
      },
      icon: CalendarIcon,
      link: '#',
    },
    {
      key: 'communicate',
      title: 'Easily communicate with field technicians',
      text:
        'Dispatch jobs directly to techs and allow them to set job status. Field staff can see their schedule and collect signatures, photos and notes – all from the mobile application.',
      colors: {
        background: '#DBE2FA',
        text: '#486CE3',
      },
      images: {
        desktop: '/images/service/service-features-3.png',
        mobile: '/images/service/m-service-features-3.png',
      },
      icon: WorkerIcon,
      link: '#',
    },
    {
      key: 'messaging',
      title: 'Messaging',
      text:
        'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
      colors: {
        background: '#FFEAE6',
        text: '#ED725A',
      },
      images: {
        desktop: '/images/service/service-features-4.png',
        mobile: '/images/service/m-service-features-4.png',
      },
      icon: MessageIcon,
      link: '#',
    },
    {
      key: 'glasses',
      icon: GlassesIcon,
      title: 'AR Glasses Support',
      text:
        'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
      colors: {
        background: '#F1E8F9',
        text: 'rgba(169, 119, 215, 1)',
      },
      images: {
        desktop: '/images/shared/shared-features-glasses-white.png',
        mobile: '/images/shared/m-shared-features-glasses-white.png',
      },
      link: '#',
    },
  ]
}
