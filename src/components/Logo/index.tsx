import { injectIntl } from 'gatsby-plugin-react-intl'
import React, { memo } from 'react'
import { IntlShape } from 'react-intl/src/types'

import * as styles from './Logo.module.css'

type Props = {
  intl: IntlShape
}

const Logo: React.FC<Props> = ({ intl }) => {
  return (
    <div className={styles.root}>
      <span className={styles.iconWrapper}>
        <LogoIcon />
      </span>
      <span className={styles.logoLabel}>
        {intl.formatMessage({ id: 'roxabo' })}
      </span>
    </div>
  )
}

export default memo(injectIntl(Logo))

function LogoIcon() {
  return (
    <svg width='24' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M23.7 7.888C23.7 3.743 19.644.4 14.88.4c0 0-6.493.01-7.26.01-.766 0-.908.993-.487 1.356.42.362 12.858 11.42 13.163 11.694.305.273.75.417 1.64-.662.891-1.08 1.765-3.086 1.765-4.91z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M1.471.56A.723.723 0 00.3 1.18v10.139c0 .118.009.36.254.576.245.216 21.59 19.196 21.988 19.552.398.356 1.158.063 1.158-.586V20.693c0-.339-.207-.558-.31-.651L9.467 7.667 1.47.56z'
        fill='url(#paint1_linear)'
      />
      <path
        d='M12.391 26.093a.742.742 0 00-.878.072l-3.44 3.12-.082.088a.582.582 0 00.098.809l.158.133.229.17c.947.664 2.281 1.112 3.524 1.112 1.447 0 3.027-.613 3.928-1.43a.583.583 0 000-.883l-3.441-3.12-.096-.072z'
        fill='url(#paint2_linear)'
      />
      <path
        d='M2.858 18.567a.714.714 0 01.982 0 461.08 461.08 0 002.317 2.064c1.407 1.25 2.965 2.635 3.158 2.817.35.33.35.873.036 1.17-.172.163-2.405 2.089-4.45 3.852-1.677 1.447-3.228 2.784-3.41 2.95-.405.366-1.191.11-1.191-.601v-9.717c0-.206.061-.403.258-.592.092-.088.55-.469 1.034-.873.55-.457 1.135-.945 1.266-1.07z'
        fill='url(#paint3_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='-11.4'
          y1='16'
          x2='18.552'
          y2='38.464'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4864EB' />
          <stop offset='1' stopColor='#2841B6' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='-11.4'
          y1='16'
          x2='18.552'
          y2='38.464'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4864EB' />
          <stop offset='1' stopColor='#2841B6' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='-11.4'
          y1='16'
          x2='18.552'
          y2='38.464'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4864EB' />
          <stop offset='1' stopColor='#2841B6' />
        </linearGradient>
        <linearGradient
          id='paint3_linear'
          x1='-11.4'
          y1='16'
          x2='18.552'
          y2='38.464'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4864EB' />
          <stop offset='1' stopColor='#2841B6' />
        </linearGradient>
      </defs>
    </svg>
  )
}
