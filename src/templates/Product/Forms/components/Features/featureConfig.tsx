import { ListItem } from '~components/RGrid'

import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  SecondIcon,
  ThirdIcon,
} from './Icons'

export const featureConfig: ListItem[] = [
  {
    icon: FirstIcon,
    title: 'Setup checklist forms in minutes',
    text:
      'Convert your current paper checklists or Excel™ spreadsheets into smart inspection forms in minutes. Our drag and drop template builder makes it easy to create customized forms.',
    colors: {
      background: '#EAF2EE',
      text: '#5B9976',
    },
    images: {
      desktop: '/images/forms/forms-features-1.png',
      mobile: '/images/forms/m-forms-features-1.png',
    },
    link: '#',
  },
  {
    icon: SecondIcon,
    title: 'Add logic to make your forms smarter',
    text:
      'Make your inspections quicker and easier to complete by showing and hiding form fields as needed with an intuitive checklist software.',
    colors: {
      background: '#DEDFED',
      text: '#5A60A6',
    },
    images: {
      desktop: '/images/forms/forms-features-2.png',
      mobile: '/images/forms/m-forms-features-2.png',
    },
    link: '#',
  },
  {
    icon: ThirdIcon,
    title: 'Messaging & Video Conference',
    text:
      'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
    colors: {
      background: '#FFEAE6',
      text: '#ED8B78',
    },
    images: {
      desktop: '/images/forms/forms-features-3.png',
      mobile: '/images/forms/m-forms-features-3.png',
    },
    link: '#',
  },
  {
    icon: FourthIcon,
    title: 'AR Glasses Support',
    text:
      'Automatically alert customers of ETAs and delays using GPS tracking data. Dispatchers receive an alert if a technician hasn’t viewed a job, and customer appointment notifications and reminders can be automated.',
    colors: {
      background: '#F1E8F9',
      text: 'rgba(169, 119, 215, 1)',
    },
    images: {
      desktop: '/images/shared/shared-features-glasses.png',
      mobile: '/images/shared/m-shared-features-glasses.png',
    },
    link: '#',
  },
  {
    icon: FifthIcon,
    title: 'By Programmers For Programmers',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    colors: {
      background: 'rgba(115, 207, 248, 0.2)',
      text: '#4DA8D9',
    },
    images: {
      desktop: '/images/forms/forms-features-5.png',
      mobile: '/images/forms/m-forms-features-5.png',
    },
    link: '#',
  },
]