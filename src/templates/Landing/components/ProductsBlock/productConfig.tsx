import React, { FC, ReactElement } from 'react'
import {
  RoxFlowIcon,
  RoxFormsIcon,
  RoxServiceIcon,
} from '~components/ProductIcons'
import styles from './ProductsBlock.module.css'
import { ListItem } from '~components/RGrid'

const colors = { background: '#4865EB', text: '#ffffff' }

const BetaLabel: FC<unknown> = (): ReactElement => (
  <span className={styles.betaLabel}>BETA 1.4</span>
)

const ComingSoonLabel: FC<unknown> = (): ReactElement => (
  <span className={styles.comingSoonLabel}>COMING SOON</span>
)

export const productConfig: ListItem[] = [
  {
    key: 'roxForms',
    icon: RoxFormsIcon,
    label: 'Forms',
    link: '/forms',
    extraItem: BetaLabel,
    images: {
      desktop: '/images/landing/landing-products-1.png',
      mobile: '/images/landing/m-landing-products-1.png',
    },
    title: 'Build checklists, conduct inspections, Communicate with your team',
    text:
      'roxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries',
    colors,
  },
  {
    key: 'roxService',
    icon: RoxServiceIcon,
    label: 'Service',
    link: '/service',
    extraItem: ComingSoonLabel,
    images: {
      desktop: '/images/landing/landing-products-2.png',
      mobile: '/images/landing/m-landing-products-2.png',
    },
    title: 'Field service management software',
    text:
      'With roxServices from Roxabo, you can schedule and manage jobs, dispatch them to field technicians,and provide ETAs to customers with notifications.',
    colors,
  },
  {
    key: 'roxFlow',
    icon: RoxFlowIcon,
    label: 'Flow',
    link: '/flow',
    extraItem: ComingSoonLabel,
    images: {
      desktop: '/images/landing/landing-products-3.png',
      mobile: '/images/landing/m-landing-products-3.png',
    },
    title: 'Tie your apps together, set yourself free.',
    text:
      'Automate business workflows by connecting your apps with RoxFlow. Build smart integrations to break the information silos in your business.',
    colors,
  },
]
