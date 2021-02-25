import React, { FC, ReactElement } from 'react'

import styles from './styles.module.css'

type IconProps = {
  isLarge?: boolean
  isMobile?: boolean
}

const RoxFormsIconWhite = () => (
  <svg width='21' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 1.167C0 .522.522 0 1.167 0h18.666C20.478 0 21 .522 21 1.167v4.666C21 6.478 20.478 7 19.833 7H1.167A1.167 1.167 0 010 5.833V1.167z'
      fill='url(#RoxFormsIconPaint0Linear)'
    />
    <path
      d='M0 11.667c0-.645.522-1.167 1.167-1.167h11.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167H1.167A1.167 1.167 0 010 16.333v-4.666z'
      fill='url(#RoxFormsIconPaint1Linear)'
    />
    <path
      d='M1.167 21C.522 21 0 21.522 0 22.167v4.666C0 27.478.522 28 1.167 28h4.666C6.478 28 7 27.478 7 26.833v-4.666C7 21.522 6.478 21 5.833 21H1.167z'
      fill='url(#RoxFormsIconPaint2Linear)'
    />
    <defs>
      <linearGradient
        id='RoxFormsIconPaint0Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
      <linearGradient
        id='RoxFormsIconPaint1Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
      <linearGradient
        id='RoxFormsIconPaint2Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
    </defs>
  </svg>
)
const RoxFormsIconBlue = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='28'
    viewBox='0 0 22 28'
    fill='none'
  >
    <path
      d='M0 1.16667C0 0.522335 0.547208 0 1.22222 0H20.7778C21.4528 0 22 0.522334 22 1.16667V5.83333C22 6.47766 21.4528 7 20.7778 7H1.22222C0.547208 7 0 6.47766 0 5.83333V1.16667Z'
      fill='url(#paint0_linear)'
    />
    <path
      d='M0 11.6667C0 11.0223 0.547208 10.5 1.22222 10.5H13.4444C14.1195 10.5 14.6667 11.0223 14.6667 11.6667V16.3333C14.6667 16.9777 14.1195 17.5 13.4444 17.5H1.22222C0.547207 17.5 0 16.9777 0 16.3333V11.6667Z'
      fill='url(#paint1_linear)'
    />
    <path
      d='M1.22222 21C0.547208 21 0 21.5223 0 22.1667V26.8333C0 27.4777 0.547208 28 1.22222 28H6.11111C6.78613 28 7.33333 27.4777 7.33333 26.8333V22.1667C7.33333 21.5223 6.78613 21 6.11111 21H1.22222Z'
      fill='url(#paint2_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
      <linearGradient
        id='paint1_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
      <linearGradient
        id='paint2_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
    </defs>
  </svg>
)
export const RoxFormsIcon: FC<IconProps> = ({
  isLarge = true,
  isMobile = false,
}): ReactElement => (
  <IconWrapper isLarge={isLarge} isMobile={isMobile}>
    {isMobile ? <RoxFormsIconBlue /> : <RoxFormsIconWhite />}
  </IconWrapper>
)

const RoxServiceIconWhite = () => (
  <svg width='21' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 7a7 7 0 017-7h13.792c.115 0 .208.093.208.208v5.625C21 6.478 20.478 7 19.833 7H0z'
      fill='url(#RoxServicePaint0Linear)'
    />
    <path
      d='M0 22.167C0 21.522.522 21 1.167 21H21a7 7 0 01-7 7H.208A.208.208 0 010 27.792v-5.625z'
      fill='url(#RoxServicePaint1Linear)'
    />
    <path
      d='M21 17.5a7 7 0 00-7-7H0a7 7 0 007 7h14z'
      fill='url(#RoxServicePaint2Linear)'
    />
    <defs>
      <linearGradient
        id='RoxServicePaint0Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
      <linearGradient
        id='RoxServicePaint1Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
      <linearGradient
        id='RoxServicePaint2Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
    </defs>
  </svg>
)
const RoxServiceIconBlue = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='28'
    viewBox='0 0 22 28'
    fill='none'
  >
    <path
      d='M0 7C0 3.13401 3.28325 0 7.33333 0H21.7822C21.9025 0 22 0.0930893 22 0.207921V5.83333C22 6.47767 21.4528 7 20.7778 7H0Z'
      fill='url(#paint0_linear)'
    />
    <path
      d='M0 22.1667C0 21.5223 0.547208 21 1.22222 21H22C22 24.866 18.7168 28 14.6667 28H0.21782C0.0975208 28 0 27.9069 0 27.7921V22.1667Z'
      fill='url(#paint1_linear)'
    />
    <path
      d='M22 17.5C22 13.634 18.7168 10.5 14.6667 10.5H0C0 14.366 3.28324 17.5 7.33333 17.5H22Z'
      fill='url(#paint2_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
      <linearGradient
        id='paint1_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
      <linearGradient
        id='paint2_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
    </defs>
  </svg>
)
export const RoxServiceIcon: FC<IconProps> = ({
  isLarge = true,
  isMobile = false,
}): ReactElement => (
  <IconWrapper isLarge={isLarge} isMobile={isMobile}>
    {isMobile ? <RoxServiceIconBlue /> : <RoxServiceIconWhite />}
  </IconWrapper>
)

const RoxFlowIconWhite = () => (
  <svg width='21' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 8.167C0 7.522.522 7 1.167 7h3.452c.555 0 1.091-.197 1.513-.557l6.91-5.886C13.464.197 14 0 14.555 0h5.278C20.478 0 21 .522 21 1.167v4.666C21 6.478 20.478 7 19.833 7h-4.365c-.555 0-1.091.197-1.513.557l-2.998 2.554 3.91 3.332c.423.36.96.557 1.514.557h3.452c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.365c-.555 0-1.091.198-1.513.557l-6.91 5.886c-.422.36-.958.557-1.513.557H1.167A1.167 1.167 0 010 26.833v-4.666C0 21.522.522 21 1.167 21h3.452c.555 0 1.091-.198 1.513-.557l3.912-3.332-2.999-2.554A2.333 2.333 0 005.532 14H1.167A1.167 1.167 0 010 12.833V8.167z'
      fill='url(#RoxFlowIconPaint0Linear)'
    />
    <defs>
      <linearGradient
        id='RoxFlowIconPaint0Linear'
        x1='-10.5'
        y1='14'
        x2='16.38'
        y2='34.16'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='.6' />
      </linearGradient>
    </defs>
  </svg>
)
const RoxFlowIconBlue = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='28'
    viewBox='0 0 22 28'
    fill='none'
  >
    <path
      d='M0 8.16667C0 7.52233 0.547208 7 1.22222 7H4.83912C5.42006 7 5.98202 6.8025 6.42426 6.4429L13.6627 0.5571C14.1049 0.1975 14.6669 0 15.2478 0H20.7778C21.4528 0 22 0.522334 22 1.16667V5.83333C22 6.47767 21.4528 7 20.7778 7H16.2044C15.6234 7 15.0615 7.1975 14.6192 7.5571L11.4783 10.1111L15.5757 13.4429C16.018 13.8025 16.5799 14 17.1609 14H20.7778C21.4528 14 22 14.5223 22 15.1667V19.8333C22 20.4777 21.4528 21 20.7778 21H16.2044C15.6234 21 15.0615 21.1975 14.6192 21.5571L7.38078 27.4429C6.93854 27.8025 6.37659 28 5.79564 28H1.22222C0.547208 28 0 27.4777 0 26.8333V22.1667C0 21.5223 0.547208 21 1.22222 21H4.83912C5.42006 21 5.98202 20.8025 6.42426 20.4429L10.5217 17.1111L7.38078 14.5571C6.93854 14.1975 6.37659 14 5.79564 14H1.22222C1.18003 14 1.13835 13.998 1.09726 13.994C0.480945 13.9342 0 13.4374 0 12.8333V8.16667Z'
      fill='url(#paint0_linear)'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='-11'
        y1='14'
        x2='16.205'
        y2='35.3754'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4864EB' />
        <stop offset='1' stopColor='#2841B6' />
      </linearGradient>
    </defs>
  </svg>
)
export const RoxFlowIcon: FC<IconProps> = ({
  isLarge = true,
  isMobile = false,
}): ReactElement => (
  <IconWrapper isLarge={isLarge} isMobile={isMobile}>
    {isMobile ? <RoxFlowIconBlue /> : <RoxFlowIconWhite />}
  </IconWrapper>
)

type Props = {
  children: ReactElement
  isLarge: boolean
  isMobile: boolean
}

export function IconWrapper({
  children,
  isLarge = true,
  isMobile = false,
}: Props): ReactElement {
  const className = isLarge ? styles.lg : styles.md
  return (
    <div className={`${className} ${isMobile ? styles.mobile : ''}`}>
      {children}
    </div>
  )
}
