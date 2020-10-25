import { memo, useEffect, useState } from 'react'

import SectionTitle from '~components/SectionTitle'
import SectionSubTitle from '~components/SectionSubTitle'
import ToggleSwitch from '~components/ToggleSwitch'

import PriceItem from '../PriceItem'
import styles from './PriceList.module.css'
import Artifacts from './Artifacts'

export type ListItem = {
  plan: string
  employeesAmount: number
  price?: {
    amount: number
    currency: string
  }
  period?: string
  infoLabel?: string
  selected?: boolean
  showRange?: boolean
}

export enum Plans {
  trial = 'Trial',
  start = 'Start',
  growingBusiness = 'Growing Business',
}

export enum Periods {
  monthly = 'monthly',
  yearly = 'yearly',
}

export default function PriceList() {
  const [period, setPeriod] = useState<string>(Periods.monthly)
  const [list, setList] = useState<any>([])

  useEffect(() => {
    const list = getList(period === Periods.monthly)
    setList(list)
  }, [period])

  const handlePeriodChange = (value: boolean) => {
    setPeriod(value ? Periods.yearly : Periods.monthly)
  }

  return (
    <div className={styles.root}>
      <SectionTitle text='Our Pricing' />
      <SectionSubTitle text='Try free 30 days. No credit card required.' />
      <div className={styles.switcherContainer}>
        <div className={styles.switcherWrapper}>
          <span
            className={`${styles.switcherLabel} ${
              period === Periods.monthly ? styles.active : ''
            }`}
          >
            Monthly
          </span>
          <ToggleSwitch
            id='period-switcher'
            name='plan-switcher'
            checked={period !== Periods.monthly}
            onChange={handlePeriodChange}
          />
          <span
            className={`${styles.switcherLabel} ${
              period === Periods.yearly ? styles.active : ''
            }`}
          >
            Yearly <SaleIcon />
          </span>
        </div>
      </div>
      <div className={styles.container}>
        {list.map((item: ListItem) => (
          <PriceItem key={item.plan} item={item} />
        ))}
      </div>
      <Artifacts />
    </div>
  )
}

const SaleIcon = memo(() => (
  <div className={styles.saleIconWrapper}>
    <svg width='103' height='43' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M37.278 38.772c-.776 0-1.475-.133-2.1-.398a3.984 3.984 0 01-1.545-1.155 3.837 3.837 0 01-.773-1.77l1.635-.247c.11.435.3.81.57 1.125.275.315.61.555 1.005.72.395.165.828.247 1.297.247.436 0 .838-.07 1.208-.21.37-.14.662-.34.877-.6.22-.26.33-.565.33-.915 0-.37-.12-.665-.36-.885-.234-.225-.567-.402-.997-.532l-2.767-.818c-.686-.2-1.253-.505-1.703-.915-.45-.41-.675-1.007-.675-1.792 0-.65.167-1.208.502-1.673.34-.47.803-.825 1.388-1.065.585-.245 1.245-.365 1.98-.36.725.005 1.378.135 1.958.39.58.25 1.06.613 1.44 1.088.384.47.65 1.032.794 1.687l-1.68.285a2.275 2.275 0 00-.495-1.05c-.245-.3-.55-.527-.915-.682a3 3 0 00-1.184-.233c-.39 0-.748.065-1.073.195-.325.13-.582.313-.773.548-.19.235-.285.5-.285.795 0 .4.153.705.458.915.31.205.717.377 1.222.517l1.995.563c.49.135.928.295 1.313.48.39.185.735.477 1.035.877.305.395.457.915.457 1.56 0 .7-.187 1.3-.562 1.8-.37.495-.87.87-1.5 1.125-.625.255-1.317.383-2.077.383zm12.051-7.005a2.6 2.6 0 01.225.787c.04.275.06.61.06 1.005v4.988h-1.387v-1.178a3.16 3.16 0 01-1.223 1.058c-.475.23-1.04.345-1.695.345-.58 0-1.075-.108-1.485-.323a2.342 2.342 0 01-.937-.877c-.21-.37-.315-.78-.315-1.23 0-1.195.637-1.995 1.912-2.4.385-.115.82-.213 1.305-.293.49-.085 1.168-.187 2.033-.307l.247-.03c-.025-.57-.18-.985-.465-1.245-.285-.265-.74-.398-1.365-.398-.455 0-.855.105-1.2.315-.345.21-.582.53-.712.96l-1.463-.45c.2-.715.585-1.272 1.155-1.672.575-.4 1.32-.6 2.235-.6.745 0 1.383.127 1.913.382s.917.643 1.162 1.163zm-3.742 5.722c.425 0 .8-.075 1.125-.225.325-.155.585-.355.78-.6.2-.245.332-.505.397-.78.1-.29.155-.712.165-1.267l-.195.03c-.73.105-1.277.19-1.642.255-.36.065-.685.14-.975.225-.35.12-.625.275-.825.465a.981.981 0 00-.293.735c0 .335.123.612.368.832.25.22.615.33 1.095.33zm4.938-7.042h1.582l2.153 6.135 2.152-6.135h1.583l-2.94 8.1h-1.59l-2.94-8.1zm9.764 4.492c.065.755.292 1.338.682 1.748.39.405.925.607 1.605.607.485 0 .908-.11 1.268-.33.36-.22.64-.54.84-.96l1.537.488a3.662 3.662 0 01-1.425 1.68c-.64.4-1.355.6-2.145.6-.8 0-1.505-.175-2.115-.525a3.705 3.705 0 01-1.425-1.485c-.335-.64-.502-1.373-.502-2.198 0-.875.165-1.64.495-2.295.33-.655.795-1.16 1.395-1.515s1.292-.532 2.077-.532c.775 0 1.445.172 2.01.517.565.345.998.84 1.298 1.485.305.64.457 1.398.457 2.273 0 .095-.005.242-.015.442H60.29zm2.347-3.33c-.665 0-1.192.18-1.582.54-.385.355-.628.878-.728 1.568h4.395c-.085-.715-.3-1.245-.645-1.59-.34-.345-.82-.518-1.44-.518zm10.51 5.438h4.883v1.492h-7.305l.007-1.395 4.703-4.215c.36-.32.612-.63.757-.93.15-.3.225-.615.225-.945 0-.38-.085-.725-.255-1.035a1.833 1.833 0 00-.712-.735 1.983 1.983 0 00-1.028-.27c-.39 0-.742.093-1.057.278a2.016 2.016 0 00-.743.75c-.175.31-.26.645-.255 1.005h-1.605c0-.69.158-1.3.473-1.83.315-.535.752-.95 1.312-1.245.56-.3 1.195-.45 1.905-.45.67 0 1.278.155 1.823.465.545.305.972.73 1.282 1.275.315.54.473 1.145.473 1.815 0 .48-.063.892-.188 1.237-.125.34-.31.653-.555.938-.24.285-.577.62-1.012 1.005l-3.128 2.79zm10.452 1.725c-.725 0-1.372-.16-1.942-.48a3.533 3.533 0 01-1.343-1.343c-.32-.57-.48-1.217-.48-1.942v-3.72c0-.725.16-1.373.48-1.943a3.48 3.48 0 011.343-1.335c.57-.325 1.217-.487 1.942-.487.725 0 1.373.162 1.943.487.57.32 1.015.765 1.335 1.335.325.57.487 1.218.487 1.943v3.72c0 .725-.162 1.372-.487 1.942a3.48 3.48 0 01-1.335 1.343c-.57.32-1.218.48-1.943.48zm0-1.5a2.141 2.141 0 001.875-1.073c.195-.335.293-.7.293-1.095v-3.93c0-.395-.098-.757-.293-1.087a2.07 2.07 0 00-.787-.78 2.099 2.099 0 00-1.088-.293c-.395 0-.76.098-1.095.293-.33.19-.592.45-.787.78-.19.33-.285.692-.285 1.087v3.93c0 .395.095.76.285 1.095.195.33.457.593.787.788.335.19.7.285 1.095.285zm8.415-4.35c-.49 0-.942-.12-1.357-.36a2.722 2.722 0 01-.983-.983 2.664 2.664 0 01-.36-1.357c0-.48.123-.928.368-1.343.25-.415.582-.745.997-.99.415-.245.86-.367 1.335-.367.49 0 .94.12 1.35.36.415.24.743.567.983.982.245.415.367.868.367 1.358 0 .49-.122.942-.367 1.357-.24.415-.568.743-.983.983-.41.24-.86.36-1.35.36zm-2.25 4.575l9.758-9.75 1.05 1.057-9.758 9.743-1.05-1.05zm2.25-5.933c.24 0 .463-.06.668-.18a1.4 1.4 0 00.487-.495c.125-.205.188-.427.188-.667 0-.24-.063-.463-.188-.668a1.34 1.34 0 00-.487-.487 1.259 1.259 0 00-.668-.188c-.24 0-.462.063-.667.188a1.4 1.4 0 00-.495.487c-.12.205-.18.428-.18.668 0 .24.06.462.18.667.125.205.29.37.495.495.205.12.427.18.667.18zm6.308 7.208c-.49 0-.943-.12-1.358-.36a2.722 2.722 0 01-.982-.983 2.664 2.664 0 01-.36-1.357c0-.48.122-.928.367-1.343.25-.415.583-.745.998-.99.415-.245.86-.367 1.335-.367.49 0 .94.12 1.35.36.415.24.742.567.982.982.245.415.368.868.368 1.358 0 .49-.123.942-.368 1.357-.24.415-.567.743-.982.983-.41.24-.86.36-1.35.36zm0-1.358c.24 0 .462-.06.667-.18a1.4 1.4 0 00.488-.495c.125-.205.187-.427.187-.667 0-.24-.062-.463-.187-.668a1.34 1.34 0 00-.488-.487 1.259 1.259 0 00-.667-.188c-.235 0-.455.063-.66.188a1.4 1.4 0 00-.495.487c-.12.205-.18.428-.18.668 0 .24.06.462.18.667.125.205.29.37.495.495.205.12.425.18.66.18zM22.45 8.988c3.64-3.097 7.851-5.25 12.294-4.01 3.595 1.002 6.291 3.657 8.38 6.376 1.477 1.922 2.8 4.04 3.761 6.278.442 1.031-.442 2.613-1.081 1.122C43.45 13.266 37.957 5.22 30.079 7.238c-7.064 1.81-12.863 9.835-15.814 15.68-1.256 2.487-2.335 5.135-3.04 7.79 1.198-1.27 2.397-2.538 3.596-3.807.97-1.027 3.036.141 1.897 1.347l-6.6 6.985c-.61.645-2.022.373-2.22-.334l-2.255-8.065c-.389-1.393 2.21-1.87 2.543-.68l1.267 4.533c1.619-7.874 6.431-16.115 12.996-21.699z'
        fill='#5B9976'
      />
    </svg>
  </div>
))

function getList(isMonthly: boolean): ListItem[] {
  const months = isMonthly ? 1 : 12
  return [
    {
      plan: Plans.trial,
      employeesAmount: 3,
      selected: true,
    },
    {
      plan: Plans.start,
      employeesAmount: 10,
      price: {
        amount: months > 1 ? 30 * months * 0.8 : 30,
        currency: 'CHF',
      },
      period: isMonthly ? 'Per Month' : 'Per Year',
    },
    {
      plan: Plans.growingBusiness,
      employeesAmount: 20,
      price: {
        amount: months > 1 ? 33 * months * 0.8 : 33,
        currency: 'CHF',
      },
      period: isMonthly ? 'Per Month' : 'Per Year',
      infoLabel: 'Per Employee: CHF 3.00',
      showRange: true,
    },
  ]
}
