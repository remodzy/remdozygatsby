import React from 'react'
import { isMobile } from 'react-device-detect'

import BlockWrapper from '~components/BlockWrapper'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import * as styles from './HowItWorks.module.css'
import { Item } from './item'

export default function HowItWorks() {
  return (
    <div className={styles.root}>
      <BlockWrapper>
        <SectionLabel text='How it works' color='warning' />
        <SectionTitle text='How RoxService works' />
        <div className={styles.itemsContainer}>
          <Item
            image={FirstIcon}
            text='Get an appointment confirmation and reminder via text message or email.'
          />
          <Item
            image={SecondIcon}
            text='Receive a notification when the technician is on the way.'
          />
          <Item
            image={ThirdIcon}
            text='Once a job is complete, submit a rating and review of the job and technician.'
          />
        </div>
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

const FirstIcon = () => (
  <svg width='239' height='239' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
      fill='url(#paint0_linear)'
    />
    <g filter='url(#FirstIconFilter0D)'>
      <path
        d='M192.452 15.664H97.675c-4.269 0-7.73 3.446-7.73 7.696v189.158c0 4.251 3.461 7.696 7.73 7.696h94.777c4.269 0 7.73-3.445 7.73-7.696V23.36c0-4.25-3.461-7.696-7.73-7.696z'
        fill='#D7DBDF'
      />
    </g>
    <path
      d='M195.438 24.564a4 4 0 00-4-4H99a4 4 0 00-4 4v186.752a4 4 0 004 4h92.438a4 4 0 004-4V24.565z'
      fill='#fff'
    />
    <rect x='135' y='29.336' width='21' height='2' rx='1' fill='#DFE2E5' />
    <rect x='127' y='195' width='38' height='12' rx='6' fill='#507CF5' />
    <rect
      x='99.746'
      y='121.674'
      width='90.639'
      height='26.947'
      rx='2'
      fill='#97BFAB'
    />
    <rect
      x='107.094'
      y='127.799'
      width='72.266'
      height='2.45'
      rx='1.225'
      fill='#fff'
    />
    <rect
      x='107.094'
      y='133.924'
      width='64.917'
      height='2.45'
      rx='1.225'
      fill='#fff'
    />
    <rect
      x='107.094'
      y='140.047'
      width='69.817'
      height='2.45'
      rx='1.225'
      fill='#fff'
    />
    <rect
      x='99.746'
      y='93.504'
      width='90.639'
      height='20.823'
      rx='2'
      fill='#E3975D'
    />
    <rect
      x='107.094'
      y='99.627'
      width='52.669'
      height='2.45'
      rx='1.225'
      fill='#fff'
    />
    <rect
      x='107.094'
      y='105.75'
      width='72.266'
      height='2.45'
      rx='1.225'
      fill='#fff'
    />
    <circle cx='145.066' cy='62.535' r='17.148' fill='#507CF5' />
    <path
      d='M141.094 56.766a1.8 1.8 0 01.214-1.471 2.283 2.283 0 011.291-.97 2.287 2.287 0 011.612.098c.488.227.843.626.989 1.11 1.327.142 2.564.612 3.576 1.36a6.184 6.184 0 012.173 2.883l.822 2.738a3.55 3.55 0 001.136 1.388v0c.383.283.371 1.143-.085 1.28l-12.777 3.835c-.457.137-.94-.575-.776-1.022v0a3.56 3.56 0 00.184-1.784l-.822-2.738a6.176 6.176 0 01.225-3.603c.434-1.182 1.207-2.255 2.238-3.104z'
      stroke='#fff'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M143.352 68.018l.273.912c.218.726.752 1.325 1.483 1.665.732.34 1.602.394 2.419.148.816-.245 1.513-.768 1.937-1.455.423-.687.538-1.48.32-2.206l-.273-.913'
      stroke='#fff'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M212.143 45.115h-27.239a4.974 4.974 0 00-3.434 1.36 4.539 4.539 0 00-1.423 3.281v19.335c0 1.231.512 2.412 1.423 3.282a4.974 4.974 0 003.434 1.36h3.822l1.918 5.938a.5.5 0 00.835.194l5.954-6.133h14.71a4.976 4.976 0 003.435-1.359A4.538 4.538 0 00217 69.091V49.756c0-1.23-.511-2.411-1.422-3.282a4.976 4.976 0 00-3.435-1.359z'
      fill='#97BFAB'
    />
    <path
      d='M188 52.175l1.743 1.764L192.648 51M188 59.23l1.743 1.763 2.905-2.938M188 66.279l1.743 1.763 2.905-2.939M196.711 52.76h10.458M196.711 59.815h10.458M196.711 66.871h10.458'
      stroke='#fff'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g filter='url(#FirstIconFilter1D)'>
      <rect
        x='10'
        y='110.521'
        width='111.469'
        height='79.788'
        rx='5'
        fill='#D7DBDF'
      />
    </g>
    <path
      d='M14.691 124.6h102.082v57.014a4 4 0 01-4 4H18.691a4 4 0 01-4-4V124.6z'
      fill='#fff'
    />
    <circle cx='98.591' cy='116.974' r='4.107' fill='#fff' />
    <circle cx='32.888' cy='116.974' r='4.107' fill='#fff' />
    <rect
      x='96.828'
      y='107'
      width='3.52'
      height='11.734'
      rx='1.76'
      fill='#507CF5'
    />
    <rect
      x='31.121'
      y='107'
      width='3.52'
      height='11.734'
      rx='1.76'
      fill='#507CF5'
    />
    <path fill='#D7DBDF' d='M21.738 131.641h12.907v12.907H21.738z' />
    <rect
      x='40.508'
      y='131.641'
      width='12.907'
      height='12.907'
      rx='1'
      fill='#97BFAB'
    />
    <rect
      x='96.828'
      y='131.641'
      width='12.907'
      height='12.907'
      rx='1'
      fill='#E3975D'
    />
    <rect
      x='78.055'
      y='165.668'
      width='12.907'
      height='12.907'
      rx='1'
      fill='#D7DBDF'
    />
    <rect
      opacity='.4'
      x='40.508'
      y='150.414'
      width='12.907'
      height='12.907'
      rx='1'
      fill='#D7DBDF'
    />
    <rect
      x='59.277'
      y='150.414'
      width='12.907'
      height='12.907'
      rx='1'
      fill='#507CF5'
    />
    <path
      d='M62.8 156.869l1.956 1.76 3.912-3.52'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='198.997' cy='184.214' r='13.473' fill='#E3975D' />
    <path
      d='M198.995 190.336a6.124 6.124 0 10.001-12.249 6.124 6.124 0 00-.001 12.249z'
      stroke='#fff'
      strokeWidth='1.3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M198.996 180.811v3.402l2.04 2.041'
      stroke='#fff'
      strokeWidth='1.3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <filter
        id='FirstIconFilter0D'
        x='87.945'
        y='14.664'
        width='114.237'
        height='208.55'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend in2='BackgroundImageFix' result='FirstIconEffect1DropShadow' />
        <feBlend
          in='SourceGraphic'
          in2='FirstIconEffect1DropShadow'
          result='shape'
        />
      </filter>
      <filter
        id='FirstIconFilter1D'
        x='8'
        y='109.521'
        width='115.469'
        height='83.788'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend in2='BackgroundImageFix' result='FirstIconEffect1DropShadow' />
        <feBlend
          in='SourceGraphic'
          in2='FirstIconEffect1DropShadow'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear'
        x1='119.5'
        y1='236.188'
        x2='127.232'
        y2='0'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBFBFB' stopOpacity='.28' />
        <stop offset='1' stopColor='#F7F7F7' />
      </linearGradient>
    </defs>
  </svg>
)

const SecondIcon = () => (
  <svg width='239' height='239' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
      fill='url(#paint0_linear)'
    />
    <g filter='url(#SecondIconFilter0D)'>
      <rect x='20' y='45' width='198' height='140' rx='5' fill='#D7DBDF' />
    </g>
    <rect x='28' y='53' width='182' height='124' rx='4' fill='#fff' />
    <g filter='url(#SecondIconFilter1D)'>
      <rect x='20' y='189' width='198' height='7' rx='3.5' fill='#D7DBDF' />
    </g>
    <mask
      id='SecondIconA'
      maskUnits='userSpaceOnUse'
      x='28'
      y='53'
      width='182'
      height='124'
    >
      <rect x='28' y='53' width='182' height='124' rx='4' fill='#fff' />
    </mask>
    <g opacity='.8' stroke='#EFF1F2' mask='url(#SecondIconA)'>
      <path
        d='M31.578 30.041l58.902 55.69M95.84 81.447L108.69 95.37M81.906 96.44l13.923 13.922M110.835 65.387l-43.91 47.121M-31.61 95.371L86.196 196.04M377.503 7.555c-22.803 35.123-61.047 87.601-97.457 129.882M-42.309 10.767C23.02 75.025 162.242 204.181 196.513 206.752c16.616 1.246 49.263-29.517 83.533-69.314m0 0L123.688 7.555'
        strokeWidth='2'
      />
      <path
        d='M238.269 102.867l-38.554 47.122 31.057 37.483M210.434 136.066l25.702 19.277M47.64 8.623l118.876 106.024 33.199 35.341'
        strokeWidth='2'
      />
      <path
        d='M166.518 9.695c9.996 10.353 26.56 40.054 12.852 76.038C165.662 121.716 87.268 197.11 49.785 230.31M152.595 32.188l-41.767 32.128M168.658 46.107l-41.767 32.129M77.633 36.473l-41.766 46.05-38.554 36.413M-59.453 126.432l163.855 151.003'
        strokeWidth='2'
      />
      <path d='M51.928 5.414l-220.616 229.183' strokeWidth='4' />
      <path d='M139.747 92.158l-27.845 29.987 24.632 21.419' strokeWidth='2' />
    </g>
    <circle cx='131' cy='152' r='7' fill='#507CF5' />
    <circle cx='131' cy='152' r='3' fill='#fff' />
    <circle cx='182' cy='77' r='6' fill='#E3975D' />
    <circle cx='182.001' cy='76.999' r='2.571' fill='#fff' />
    <circle cx='76' cy='101' r='6' fill='#97BFAB' />
    <circle cx='75.997' cy='101.001' r='2.571' fill='#fff' />
    <path
      d='M8 127.013c0-1.112.895-2.013 2-2.013h65c1.105 0 2 .901 2 2.013v18.122a2.006 2.006 0 01-2 2.013H10c-1.105 0-2-.901-2-2.013v-18.122z'
      fill='#E3975D'
    />
    <path
      d='M31.852 133.092c0-.705.461-1.278 1.03-1.278h17.531c.57 0 1.031.573 1.031 1.278 0 .706-.462 1.278-1.031 1.278h-17.53c-.57 0-1.031-.572-1.031-1.278zM31.852 139.055c0-.706.453-1.278 1.013-1.278H68.32c.56 0 1.013.572 1.013 1.278 0 .706-.454 1.278-1.013 1.278H32.865c-.56 0-1.013-.572-1.013-1.278zM26.739 136.075a6.815 6.815 0 11-13.63-.001 6.815 6.815 0 0113.63.001z'
      fill='#fff'
    />
    <circle cx='151' cy='43' r='20' fill='#507CF5' />
    <path
      d='M151 52.265l-2.978-3.176h-1.985c-.79 0-1.548-.335-2.106-.93a3.284 3.284 0 01-.872-2.247V39.56c0-.842.313-1.65.872-2.246a2.886 2.886 0 012.106-.93h9.926c.79 0 1.547.334 2.106.93.558.596.872 1.404.872 2.246v6.353c0 .843-.314 1.65-.872 2.246a2.888 2.888 0 01-2.106.93h-1.985L151 52.266zM147.031 40.617h7.941M147.031 44.853h5.956'
      stroke='#fff'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g filter='url(#SecondIconFilter2D)'>
      <path
        d='M224.645 103h-51.449c-2.317 0-4.196 1.87-4.196 4.178v102.684c0 2.307 1.879 4.177 4.196 4.177h51.449c2.318 0 4.197-1.87 4.197-4.177V107.178c0-2.308-1.879-4.178-4.197-4.178z'
        fill='#D7DBDF'
      />
    </g>
    <path
      d='M226.362 109.58a4 4 0 00-4-4H175.84a4 4 0 00-4 4v97.72a4 4 0 004 4h46.522a4 4 0 004-4v-97.72z'
      fill='#fff'
    />
    <circle cx='198.84' cy='157.58' r='22' fill='#97BFAB' />
    <path
      d='M198.84 159.951a3.102 3.102 0 10-.002-6.204 3.102 3.102 0 00.002 6.204z'
      stroke='#fff'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M204.689 162.698l-4.387 4.386a2.066 2.066 0 01-2.252.449 2.066 2.066 0 01-.67-.449l-4.388-4.386a8.274 8.274 0 01-1.792-9.013 8.272 8.272 0 0115.752 4.779 8.274 8.274 0 01-2.263 4.234v0z'
      stroke='#fff'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect
      opacity='.8'
      x='192.84'
      y='109.58'
      width='13'
      height='1'
      rx='.5'
      fill='#D7DBDF'
    />
    <rect x='190.84' y='198.58' width='16' height='6' rx='3' fill='#507CF5' />
    <defs>
      <filter
        id='SecondIconFilter0D'
        x='18'
        y='44'
        width='202'
        height='144'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='SecondIconEffect1DropShadow'
        />
        <feBlend
          in='SourceGraphic'
          in2='SecondIconEffect1DropShadow'
          result='shape'
        />
      </filter>
      <filter
        id='SecondIconFilter1D'
        x='18'
        y='188'
        width='202'
        height='11'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='SecondIconEffect1DropShadow'
        />
        <feBlend
          in='SourceGraphic'
          in2='SecondIconEffect1DropShadow'
          result='shape'
        />
      </filter>
      <filter
        id='SecondIconFilter2D'
        x='167'
        y='102'
        width='63.842'
        height='115.039'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='SecondIconEffect1DropShadow'
        />
        <feBlend
          in='SourceGraphic'
          in2='SecondIconEffect1DropShadow'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear'
        x1='119.5'
        y1='236.188'
        x2='127.232'
        y2='0'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBFBFB' stopOpacity='.28' />
        <stop offset='1' stopColor='#F7F7F7' />
      </linearGradient>
    </defs>
  </svg>
)

const ThirdIcon = () => (
  <svg width='239' height='239' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
      fill='url(#ThirdIconPaint0Linear)'
    />
    <g filter='url(#ThirdIconFilter0D)'>
      <path
        d='M166.507 17H71.73C67.46 17 64 20.446 64 24.696v189.158c0 4.251 3.46 7.696 7.73 7.696h94.777c4.269 0 7.73-3.445 7.73-7.696V24.696c0-4.25-3.461-7.696-7.73-7.696z'
        fill='#D7DBDF'
      />
    </g>
    <path
      d='M169.493 25.9a4 4 0 00-4-4H73.055a4 4 0 00-4 4v186.752a4 4 0 004 4h92.438a4 4 0 004-4V25.9z'
      fill='#fff'
    />
    <rect x='109.055' y='30.336' width='21' height='2' rx='1' fill='#DFE2E5' />
    <rect
      x='102.055'
      y='196.336'
      width='38'
      height='12'
      rx='6'
      fill='#507CF5'
    />
    <rect x='74' y='51' width='90' height='30' rx='2' fill='#97BFAB' />
    <circle cx='89' cy='66' r='9' fill='#fff' />
    <rect x='105' y='60' width='46' height='2' rx='1' fill='#fff' />
    <path
      d='M108 70.975L106.146 72l.354-2.171-1.5-1.537 2.073-.317L108 66l.927 1.975 2.073.317-1.5 1.537.354 2.171L108 70.975zM118 70.975L116.146 72l.354-2.171-1.5-1.537 2.073-.317L118 66l.927 1.975 2.073.317-1.5 1.537.354 2.171L118 70.975zM128 70.975L126.146 72l.354-2.171-1.5-1.537 2.073-.317L128 66l.927 1.975 2.073.317-1.5 1.537.354 2.171L128 70.975zM138 70.975L136.146 72l.354-2.171-1.5-1.537 2.073-.317L138 66l.927 1.975 2.073.317-1.5 1.537.354 2.171L138 70.975z'
      stroke='#fff'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      opacity='.3'
      d='M148 70.975L146.146 72l.354-2.171-1.5-1.537 2.073-.317L148 66l.927 1.975 2.073.317-1.5 1.537.354 2.171L148 70.975z'
      stroke='#fff'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='74' y='89' width='90' height='30' rx='2' fill='#E3975D' />
    <circle cx='89' cy='104' r='9' fill='#fff' />
    <rect x='105' y='98' width='35' height='2' rx='1' fill='#fff' />
    <path
      d='M108 108.975L106.146 110l.354-2.171-1.5-1.537 2.073-.317L108 104l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM118 108.975L116.146 110l.354-2.171-1.5-1.537 2.073-.317L118 104l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM128 108.975L126.146 110l.354-2.171-1.5-1.537 2.073-.317L128 104l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM138 108.975L136.146 110l.354-2.171-1.5-1.537 2.073-.317L138 104l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM148 108.975L146.146 110l.354-2.171-1.5-1.537 2.073-.317L148 104l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025z'
      stroke='#fff'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='74' y='127' width='90' height='30' rx='2' fill='#507CF5' />
    <circle cx='89' cy='142' r='9' fill='#fff' />
    <rect x='105' y='136' width='40' height='2' rx='1' fill='#fff' />
    <path
      d='M108 146.975L106.146 148l.354-2.171-1.5-1.537 2.073-.317L108 142l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM118 146.975L116.146 148l.354-2.171-1.5-1.537 2.073-.317L118 142l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM128 146.975L126.146 148l.354-2.171-1.5-1.537 2.073-.317L128 142l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025z'
      stroke='#fff'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      opacity='.3'
      d='M138 146.975L136.146 148l.354-2.171-1.5-1.537 2.073-.317L138 142l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025zM148 146.975L146.146 148l.354-2.171-1.5-1.537 2.073-.317L148 142l.927 1.975 2.073.317-1.5 1.537.354 2.171-1.854-1.025z'
      stroke='#fff'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M89.005 65.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zM87 68.998v-.667a1.333 1.333 0 011.333-1.333h1.334A1.333 1.333 0 0191 68.331v.667'
      stroke='#97BFAB'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M89.005 103.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zM87 106.998v-.667a1.333 1.333 0 011.333-1.333h1.334A1.334 1.334 0 0191 106.331v.667'
      stroke='#E3975D'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M89.005 141.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zM87 144.998v-.667a1.333 1.333 0 011.333-1.333h1.334A1.334 1.334 0 0191 144.331v.667'
      stroke='#507CF5'
      strokeWidth='.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='151' cy='22' r='14' fill='#507CF5' />
    <path
      d='M151 25.292L147.91 27l.59-3.618-2.5-2.563 3.455-.527L151 17l1.545 3.292 3.455.527-2.5 2.563.59 3.618-3.09-1.708z'
      stroke='#fff'
      strokeWidth='1.3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='10' y='94' width='46' height='34' rx='2' fill='#E3975D' />
    <circle cx='33' cy='105' r='7' fill='#fff' />
    <path
      d='M33.005 104.666a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM31 108v-.667A1.335 1.335 0 0132.333 106h1.333A1.333 1.333 0 0135 107.333V108'
      stroke='#E3975D'
      strokeWidth='.7'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='20' y='117' width='27' height='2' rx='1' fill='#fff' />
    <rect x='24' y='122' width='19' height='2' rx='1' fill='#fff' />
    <path
      d='M222.096 166h-67.239a4.975 4.975 0 00-3.434 1.359 4.54 4.54 0 00-1.423 3.282v19.335a4.54 4.54 0 001.423 3.282 4.975 4.975 0 003.434 1.359h3.822l1.918 5.939a.5.5 0 00.835.194l5.954-6.133h54.71a4.977 4.977 0 003.435-1.359 4.54 4.54 0 001.422-3.282v-19.335a4.54 4.54 0 00-1.422-3.282 4.977 4.977 0 00-3.435-1.359z'
      fill='#97BFAB'
    />
    <rect x='156' y='172' width='59' height='3' rx='1.5' fill='#fff' />
    <rect x='156' y='179' width='47' height='3' rx='1.5' fill='#fff' />
    <rect x='156' y='186' width='57' height='3' rx='1.5' fill='#fff' />
    <defs>
      <linearGradient
        id='ThirdIconPaint0Linear'
        x1='119.5'
        y1='236.188'
        x2='127.232'
        y2='0'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBFBFB' stopOpacity='.28' />
        <stop offset='1' stopColor='#F7F7F7' />
      </linearGradient>
      <filter
        id='ThirdIconFilter0D'
        x='62'
        y='16'
        width='114.237'
        height='208.55'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feColorMatrix values='0 0 0 0 0.64974 0 0 0 0 0.671113 0 0 0 0 0.72526 0 0 0 0.8 0' />
        <feBlend in2='BackgroundImageFix' result='ThirdIconEffect1DropShadow' />
        <feBlend
          in='SourceGraphic'
          in2='ThirdIconEffect1DropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)

function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={160}
        right={10.22}
        columns={2}
        zIndex={1}
        size={3}
        gap={10.22}
        // prettier-ignore
        list={[
          1,0,
          0,0,
          0,0,
          0,1,
          0,0,
          0,0,
          0,1,
          0,0,
        ]}
      />
      <DotsArtifact
        top={700}
        left={13.57}
        columns={3}
        zIndex={1}
        size={3}
        gap={18.57}
        // prettier-ignore
        list={[
          0,0,0,
          0,1,0,
          0,1,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        top={770}
        right={14.64}
        columns={2}
        zIndex={1}
        size={3.9}
        gap={18.57}
        // prettier-ignore
        list={[
          0,1,
          0,0,
          0,0,
          1,0,
        ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        centerSize={12.4}
        left='-8.27%'
        top={340}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='88%'
        top={490}
      />
    </>
  )
}

function OutMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-80}
        left={11.31}
        columns={3}
        zIndex={1}
        size={4.07}
        gap={19.38}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,1,
          0,0,1,
          1,0,0,
          0,0,0,
          0,0,0,
          1,1,0,
          0,0,0,
        ]}
      />
    </>
  )
}

function InDesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='69.1875%'
        top={23}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='11.25%'
        top={401}
      />
      <DotsArtifact
        top={55}
        left={52}
        columns={8}
        zIndex={1}
        size={4.19}
        gap={19.96}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />
    </>
  )
}

function OutDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={316}
        right={22}
        columns={4}
        zIndex={1}
        size={6.26}
        gap={29.8}
        // prettier-ignore
        list={[
            0, 1, 1, 0,
            0, 0, 0, 0,
            0, 0, 0, 1,
            1, 0, 0, 0
          ]}
      />
    </>
  )
}
