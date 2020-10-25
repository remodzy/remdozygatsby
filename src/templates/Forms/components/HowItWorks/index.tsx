import * as React from 'react'
import HowItWorks from '~components/HowItWorks'

const HowItWorksWrapper = React.memo(() => {
  const list = [
    {
      key: 'actions',
      icon: Actions,
      title: 'Actions',
      text:
        'Get eyes and ears on the ground at all times by empowering your team to run  issues into actions.',
    },
    {
      key: 'team-management',
      icon: TeamManagement,
      title: 'Team Management',
      text: 'Share inspections across teams with a single click.',
    },
    {
      key: 'integrations',
      icon: Integrations,
      title: 'Integrations',
      text:
        'Connect Remodzy Forms to business software system such as Tableau, Sharepoint, and more.',
    },
  ]
  return <HowItWorks title='How Remodzy Forms works' list={list} />
})

export default HowItWorksWrapper

function Actions(): React.ReactElement<any, any> {
  return (
    <svg
      width='239'
      height='239'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
        fill='url(#ActionsLinearGradient0)'
      />
      <g filter='url(#ActionsFilter0D)'>
        <rect x='20' y='45' width='198' height='140' rx='5' fill='#D7DBDF' />
      </g>
      <rect x='28' y='53' width='182' height='124' rx='4' fill='#fff' />
      <g filter='url(#ActionsFilter1D)'>
        <rect x='20' y='189' width='198' height='7' rx='3.5' fill='#D7DBDF' />
      </g>
      <rect x='79' y='67' width='14' height='14' rx='1' fill='#507CF5' />
      <rect x='79' y='97' width='14' height='14' rx='1' fill='#E3975D' />
      <rect x='79' y='127' width='14' height='14' rx='1' fill='#97BFAB' />
      <rect x='100' y='69' width='47' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='73' width='42' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='77' width='57' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='99' width='47' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='103' width='42' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='129' width='49' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='133' width='54' height='2' rx='1' fill='#D7DBDF' />
      <rect x='100' y='137' width='45' height='2' rx='1' fill='#D7DBDF' />
      <path
        opacity='.8'
        d='M28 57a4 4 0 014-4h29v124H32a4 4 0 01-4-4V57z'
        fill='#EFF1F2'
      />
      <rect x='37' y='67' width='16' height='3' rx='1.5' fill='#507CF5' />
      <rect x='37' y='86' width='16' height='3' rx='1.5' fill='#D7DBDF' />
      <rect x='37' y='105' width='16' height='3' rx='1.5' fill='#D7DBDF' />
      <rect x='37' y='124' width='16' height='3' rx='1.5' fill='#D7DBDF' />
      <circle cx='217.5' cy='133.58' r='12.5' fill='#507CF5' />
      <path
        d='M218.75 127.697v2.615c0 .173.066.339.185.462a.62.62 0 00.445.191h2.521'
        stroke='#fff'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M220.645 139.462h-6.302a1.24 1.24 0 01-.892-.383 1.334 1.334 0 01-.369-.924v-9.151c0-.346.133-.679.369-.924a1.24 1.24 0 01.892-.383h4.411l3.152 3.268v7.19c0 .346-.133.679-.37.924a1.238 1.238 0 01-.891.383zM217.492 132.924v3.921M215.605 134.885h3.782'
        stroke='#fff'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='128.527'
        y='21'
        width='55.474'
        height='42.16'
        rx='2'
        fill='#97BFAB'
      />
      <path
        d='M166.248 37.644c0 5.514-4.471 9.985-9.985 9.985-5.515 0-9.986-4.47-9.986-9.985s4.471-9.986 9.986-9.986c5.514 0 9.985 4.47 9.985 9.986z'
        fill='#fff'
      />
      <rect
        x='137.402'
        y='54.285'
        width='37.722'
        height='2.219'
        rx='1.109'
        fill='#fff'
      />
      <path
        d='M155.677 39.865l3.491-6.673M159.173 33.19l-.399 9.263a.269.269 0 01-.185.22.267.267 0 01-.277-.076l-2.632-2.73-3.743-.604a.266.266 0 01-.145-.462l7.381-5.611z'
        stroke='#97BFAB'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 150.457a2.369 2.369 0 012.361-2.377h76.74a2.369 2.369 0 012.36 2.377v21.394a2.369 2.369 0 01-2.36 2.377H9.36A2.369 2.369 0 017 171.851v-21.394z'
        fill='#E3975D'
      />
      <path
        d='M35.156 157.634c0-.834.545-1.509 1.218-1.509H57.07c.672 0 1.217.675 1.217 1.509 0 .833-.545 1.508-1.217 1.508H36.374c-.673 0-1.218-.675-1.218-1.508zM35.156 164.673c0-.834.536-1.509 1.196-1.509h41.859c.66 0 1.196.675 1.196 1.509 0 .833-.535 1.508-1.196 1.508H36.352c-.66 0-1.196-.675-1.196-1.508zM29.122 161.155a8.046 8.046 0 11-16.092 0 8.046 8.046 0 0116.092 0z'
        fill='#fff'
      />
      <defs>
        <filter
          id='ActionsFilter0D'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <filter
          id='ActionsFilter1D'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <linearGradient
          id='ActionsLinearGradient0'
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
}

function TeamManagement(): React.ReactElement<any, any> {
  return (
    <svg
      width='239'
      height='239'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
        fill='url(#TeamManagementPaint0Linear)'
      />
      <g filter='url(#TeamManagementFilter0D)'>
        <rect x='21' y='45' width='198' height='140' rx='5' fill='#D7DBDF' />
      </g>
      <rect x='29' y='53' width='182' height='124' rx='4' fill='#fff' />
      <g filter='url(#TeamManagementFilter1D)'>
        <rect x='21' y='189' width='198' height='7' rx='3.5' fill='#D7DBDF' />
      </g>
      <rect x='85' y='140' width='71' height='3' rx='1.5' fill='#D7DBDF' />
      <rect x='95' y='148' width='51' height='3' rx='1.5' fill='#D7DBDF' />
      <circle cx='120' cy='104' r='26' fill='#507CF5' />
      <path
        d='M117.003 103.333a4.666 4.666 0 100-9.332 4.666 4.666 0 000 9.332zM110 115v-2.333a4.667 4.667 0 014.667-4.667h4.666a4.667 4.667 0 014.667 4.667V115M125.164 94.152a4.666 4.666 0 010 9.042M131 115.001v-2.334a4.66 4.66 0 00-.986-2.841 4.66 4.66 0 00-2.514-1.65'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M226.389 70h-55.825a4.133 4.133 0 00-2.852 1.129 3.77 3.77 0 00-1.181 2.724v16.053c0 1.022.425 2.002 1.181 2.725a4.133 4.133 0 002.852 1.128h3.173l1.549 4.797a.5.5 0 00.835.194l4.845-4.99h45.423a4.13 4.13 0 002.852-1.13 3.769 3.769 0 001.181-2.724V73.853a3.77 3.77 0 00-1.181-2.724A4.13 4.13 0 00226.389 70z'
        fill='#97BFAB'
      />
      <rect
        x='171.512'
        y='74.982'
        width='48.985'
        height='2.491'
        rx='1.245'
        fill='#fff'
      />
      <rect
        x='171.512'
        y='80.793'
        width='39.022'
        height='2.491'
        rx='1.245'
        fill='#fff'
      />
      <rect
        x='171.512'
        y='86.606'
        width='47.324'
        height='2.491'
        rx='1.245'
        fill='#fff'
      />
      <circle cx='63' cy='48' r='13' fill='#E3975D' />
      <path
        d='M61.91 43.005c.277-1.142 1.9-1.142 2.177 0a1.12 1.12 0 001.673.692c1.003-.61 2.151.537 1.54 1.54a1.12 1.12 0 00.692 1.673c1.142.277 1.142 1.9 0 2.177a1.12 1.12 0 00-.693 1.673c.611 1.003-.536 2.151-1.54 1.54a1.12 1.12 0 00-1.672.692c-.277 1.142-1.9 1.142-2.177 0a1.122 1.122 0 00-1.673-.692c-1.003.61-2.151-.537-1.54-1.541a1.121 1.121 0 00-.693-1.672c-1.14-.277-1.14-1.9 0-2.177a1.12 1.12 0 00.693-1.673c-.61-1.003.537-2.151 1.54-1.54a1.12 1.12 0 001.673-.693z'
        stroke='#fff'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M62.997 49.95a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9z'
        stroke='#fff'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g filter='url(#TeamManagementFilter2D)'>
        <path
          d='M62.22 103H13.939A3.93 3.93 0 0010 106.921v96.363a3.93 3.93 0 003.938 3.921H62.22a3.93 3.93 0 003.938-3.921v-96.363A3.93 3.93 0 0062.22 103z'
          fill='#D7DBDF'
        />
      </g>
      <path
        d='M63.983 109.814a4 4 0 00-4-4H16.816a4 4 0 00-4 4v91.214a4 4 0 004 4h43.167a4 4 0 004-4v-91.214z'
        fill='#fff'
      />
      <circle cx='38.154' cy='154.615' r='20.646' fill='#97BFAB' />
      <rect
        opacity='.8'
        x='32.371'
        y='109.176'
        width='12.2'
        height='.938'
        rx='.469'
        fill='#D7DBDF'
      />
      <rect
        x='30.496'
        y='192.697'
        width='15.015'
        height='5.631'
        rx='2.815'
        fill='#507CF5'
      />
      <path
        d='M32.965 153.146v7.974c0 .264-.11.518-.307.705a1.077 1.077 0 01-.742.292h-2.098c-.278 0-.545-.105-.741-.292a.973.973 0 01-.308-.705v-6.978a.97.97 0 01.308-.704c.196-.187.463-.292.741-.292h3.147zm0 0c1.113 0 2.18-.42 2.967-1.168a3.89 3.89 0 001.228-2.82v-.996c0-.529.221-1.036.615-1.41a2.154 2.154 0 011.483-.584c.556 0 1.09.21 1.483.584.394.374.615.881.615 1.41v4.984h3.146c.557 0 1.09.21 1.484.584.393.373.614.88.614 1.409l-1.049 4.984c-.15.612-.437 1.137-.815 1.496-.378.36-.828.535-1.282.498H36.11a3.231 3.231 0 01-2.224-.876 2.917 2.917 0 01-.922-2.115'
        stroke='#fff'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='151' y='169' width='46' height='34' rx='2' fill='#E3975D' />
      <circle cx='174' cy='180' r='7' fill='#fff' />
      <path
        d='M174.005 179.666a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zM172 183v-.667a1.334 1.334 0 011.333-1.333h1.333a1.333 1.333 0 011.333 1.333V183'
        stroke='#E3975D'
        strokeWidth='.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='161' y='192' width='27' height='2' rx='1' fill='#fff' />
      <rect x='165' y='197' width='19' height='2' rx='1' fill='#fff' />
      <defs>
        <filter
          id='TeamManagementFilter0D'
          x='19'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <filter
          id='TeamManagementFilter1D'
          x='19'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <filter
          id='TeamManagementFilter2D'
          x='8'
          y='102'
          width='60.158'
          height='108.205'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <linearGradient
          id='TeamManagementPaint0Linear'
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
}

function Integrations(): React.ReactElement<any, any> {
  return (
    <svg
      width='239'
      height='239'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M119.5 239c65.998 0 119.5-53.502 119.5-119.5C239 53.502 185.498 0 119.5 0 53.502 0 0 53.502 0 119.5 0 185.498 53.502 239 119.5 239z'
        fill='url(#IntegrationsPaint0Linear)'
      />
      <g filter='url(#IntegrationsFilter0D)'>
        <rect x='21' y='45' width='198' height='140' rx='5' fill='#D7DBDF' />
      </g>
      <rect x='29' y='53' width='182' height='124' rx='4' fill='#fff' />
      <g filter='url(#IntegrationsFilter1D)'>
        <rect x='21' y='189' width='198' height='7' rx='3.5' fill='#D7DBDF' />
      </g>
      <path
        opacity='.6'
        d='M120 94.5V83a3 3 0 00-3-3H87.5a3 3 0 01-3-3V59.5M95 114H82.5a3 3 0 00-3 3v16a3 3 0 01-3 3h-16M119.5 144v5a3 3 0 003 3h26a3 3 0 013 3v11.5'
        stroke='#507CF5'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='4 4'
      />
      <rect x='93' y='89' width='54' height='52' rx='9' fill='#fff' />
      <path
        d='M138.403 89h-36.806c-2.28 0-4.467.901-6.079 2.505A8.533 8.533 0 0093 97.555v34.891c0 2.268.906 4.444 2.518 6.048a8.616 8.616 0 006.079 2.506h3.267v-40.818c0-.59.236-1.157.655-1.574.42-.418.989-.653 1.583-.653h26.597c.593 0 1.163.235 1.582.653.42.417.656.984.656 1.574v6.063c0 .591-.236 1.157-.656 1.575a2.245 2.245 0 01-1.582.652h-16.437c-.285 0-.558.113-.759.313a1.067 1.067 0 00-.315.756v5.079c0 .284.113.556.315.757.201.2.474.313.759.313h14.943a2.249 2.249 0 011.584.651 2.23 2.23 0 01.657 1.576v6.06a2.217 2.217 0 01-.657 1.575 2.238 2.238 0 01-1.584.652h-14.943a1.088 1.088 0 00-.764.317 1.073 1.073 0 00-.31.765v13.709h22.215a8.62 8.62 0 006.079-2.506A8.533 8.533 0 00147 132.44V97.554a8.534 8.534 0 00-2.518-6.049A8.619 8.619 0 00138.403 89z'
        fill='#507CF5'
      />
      <path
        opacity='.6'
        d='M149.5 116h8.5a3 3 0 003-3v-3a3 3 0 013-3h22'
        stroke='#507CF5'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='4 4'
      />
      <circle cx='167' cy='46' r='11' fill='#507CF5' />
      <path
        d='M166.069 41.732c.237-.976 1.625-.976 1.862 0a.952.952 0 00.564.659.955.955 0 00.865-.067c.857-.522 1.839.459 1.317 1.317a.948.948 0 00.195 1.226c.114.097.25.167.396.202.976.237.976 1.625 0 1.862a.963.963 0 00-.659.564.95.95 0 00.067.865c.522.857-.459 1.839-1.317 1.317a.955.955 0 00-1.428.591c-.237.976-1.625.976-1.862 0a.952.952 0 00-.564-.659.955.955 0 00-.865.067c-.857.522-1.839-.459-1.317-1.317a.948.948 0 00-.195-1.226.954.954 0 00-.396-.202c-.976-.237-.976-1.625 0-1.862a.963.963 0 00.659-.564.95.95 0 00-.067-.865c-.522-.857.459-1.839 1.317-1.317a.957.957 0 001.428-.591z'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M166.999 47.667a1.666 1.666 0 100-3.332 1.666 1.666 0 000 3.332z'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g filter='url(#IntegrationsFilter2D)'>
        <rect x='62' y='21' width='45' height='43' rx='2' fill='#D7DBDF' />
      </g>
      <ellipse cx='84.5' cy='37.417' rx='10.086' ry='10.164' fill='#fff' />
      <path
        d='M80.621 41.33h1.724l5.604-5.647a1.233 1.233 0 000-1.737 1.215 1.215 0 00-1.724 0l-5.604 5.646v1.738zM85.578 34.598l1.724 1.737'
        stroke='#D7DBDF'
        strokeWidth='.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M84.5 35.683l-2.155-2.171-1.724 1.737 2.155 2.172M82.35 35.684l-.647.651M86.224 37.42l2.155 2.172-1.724 1.737-2.155-2.172M86.225 39.59l-.647.651'
        stroke='#D7DBDF'
        strokeWidth='.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='72.863'
        y='52.275'
        width='24.052'
        height='1.564'
        rx='.782'
        fill='#fff'
      />
      <rect
        x='70.535'
        y='56.182'
        width='28.707'
        height='1.564'
        rx='.782'
        fill='#fff'
      />
      <rect x='6' y='110' width='58' height='55' rx='2' fill='#E3975D' />
      <circle cx='35' cy='131' r='13' fill='#fff' />
      <path
        d='M30 136h2.222l7.222-7.222a1.571 1.571 0 10-2.222-2.222L30 133.778V136zM36.39 127.389l2.223 2.222'
        stroke='#E3975D'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M35 128.778L32.222 126 30 128.222 32.778 131M32.224 128.777l-.833.834M37.222 131L40 133.778 37.778 136 35 133.222M37.224 133.777l-.833.834'
        stroke='#E3975D'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='20' y='150' width='31' height='2' rx='1' fill='#fff' />
      <rect x='17' y='155' width='37' height='2' rx='1' fill='#fff' />
      <rect x='133' y='169' width='38' height='36.035' rx='2' fill='#97BFAB' />
      <circle cx='152.002' cy='182.759' r='8.517' fill='#fff' />
      <path
        d='M148.723 186.032h1.456l4.731-4.732a1.029 1.029 0 10-1.456-1.455l-4.731 4.731v1.456zM152.914 180.393l1.456 1.456'
        stroke='#97BFAB'
        strokeWidth='.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M151.999 181.302l-1.82-1.82-1.456 1.456 1.82 1.82M150.179 181.301l-.546.546M153.456 182.758l1.82 1.82-1.456 1.456-1.82-1.82M153.46 184.576l-.546.546'
        stroke='#97BFAB'
        strokeWidth='.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='142.172'
        y='195.207'
        width='20.31'
        height='1.31'
        rx='.655'
        fill='#fff'
      />
      <rect
        x='140.203'
        y='198.482'
        width='24.241'
        height='1.31'
        rx='.655'
        fill='#fff'
      />
      <rect
        x='188'
        y='86.846'
        width='44'
        height='41.724'
        rx='2'
        fill='#507CF5'
      />
      <circle cx='210.003' cy='102.776' r='9.862' fill='#fff' />
      <path
        d='M206.211 106.569h1.686l5.479-5.479a1.196 1.196 0 000-1.686 1.193 1.193 0 00-1.686 0l-5.479 5.479v1.686zM211.059 100.035l1.685 1.686M210.004 101.09l-2.107-2.108-1.686 1.686 2.107 2.108M207.898 101.09l-.632.632'
        stroke='#507CF5'
        strokeWidth='.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M211.69 102.775l2.107 2.108-1.686 1.685-2.107-2.107M211.691 104.883l-.632.632'
        stroke='#507CF5'
        strokeWidth='.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='198.621'
        y='117.189'
        width='23.517'
        height='1.517'
        rx='.759'
        fill='#fff'
      />
      <rect
        x='196.348'
        y='120.984'
        width='28.069'
        height='1.517'
        rx='.759'
        fill='#fff'
      />
      <defs>
        <filter
          id='IntegrationsFilter0D'
          x='19'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <filter
          id='IntegrationsFilter1D'
          x='19'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <filter
          id='IntegrationsFilter2D'
          x='60'
          y='20'
          width='49'
          height='47'
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
          <feBlend in2='BackgroundImageFix' result='effect1DropShadow' />
          <feBlend in='SourceGraphic' in2='effect1DropShadow' result='shape' />
        </filter>
        <linearGradient
          id='IntegrationsPaint0Linear'
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
}
