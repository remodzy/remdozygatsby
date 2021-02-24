import React, { ReactElement, SVGProps } from 'react'

import { useDeviceDetect } from '~utils/hooks'

export const Circle = ({ color = '#5A60A6' }): ReactElement => (
  <svg width='64' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='.2'>
      <circle cx='32' cy='32' r='32' fill='url(#paint0_linear)' />
      <circle r='5.714' transform='matrix(-1 0 0 1 32 32)' fill={color} />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='32'
        y1='0'
        x2='32'
        y2='64'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#A1A7ED' />
        <stop offset='1' stopColor='#7177C2' />
      </linearGradient>
    </defs>
  </svg>
)

type Props = {
  color?: string
  isMobile?: boolean
} & SVGProps<SVGElement>

const icons: { [key: string]: (props: Props) => ReactElement } = {
  pointEmpty: ({ color, className }: Props) => (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
    >
      <circle
        cx='6'
        cy='6'
        r='5'
        stroke={color ? color : '#496EE5'}
        strokeWidth='2'
      />
    </svg>
  ),
  pointFilled: ({ color, className }: Props) => (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
    >
      <circle cx='6' cy='6' r='6' fill={color ? color : '#496EE5'} />
    </svg>
  ),
  arrow: ({ color, className }: Props) => (
    <svg
      className={className}
      width='10'
      height='6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1l4 4 4-4'
        stroke={color || '#091F3E'}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  cross: ({ className }) => (
    <svg
      className={className}
      width='14'
      height='14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 1L1 13M1 1l12 12'
        stroke='#122745'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  hamburger: ({ className }) => (
    <svg
      className={className}
      width='24'
      height='17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='24' height='3' rx='1.5' fill='#4864EB' />
      <rect y='7' width='24' height='3' rx='1.5' fill='#4864EB' />
      <rect y='14' width='24' height='3' rx='1.5' fill='#4864EB' />
    </svg>
  ),
  paragraph: ({ className }) => (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='170'
      height='160'
      fill='none'
    >
      <path
        fill='#496EE5'
        fillRule='evenodd'
        d='M5.61002 115.145L13.6417 115.768C22.8051 116.479 26.8729 114.083 28.9622 111.13C32.0524 106.762 34.1189 99.8667 34.1189 89.4612C34.1189 88.9906 34.1175 88.5352 34.1148 88.0946H0.971984V0H80.4396V89.1459C80.4396 109.851 75.8322 127.242 65.5964 140.335C55.2921 153.579 40.6591 160 22.8574 160C17.6667 160 12.6438 159.533 7.80438 158.575L0 157.031L5.61002 115.145ZM58.8729 135.191C67.5845 124.047 71.9404 108.699 71.9404 89.1459V8.41H9.47119V79.6846H42.2994C42.5119 81.9973 42.6181 85.2562 42.6181 89.4612C42.6181 100.815 40.3871 109.645 35.925 115.953C31.4629 122.26 23.8136 124.993 12.9771 124.152L9.47119 150.329C12.1601 150.861 14.934 151.224 17.793 151.42C17.8279 151.422 17.8627 151.425 17.8976 151.427C19.5234 151.536 21.1767 151.59 22.8574 151.59C38.3685 151.59 50.3736 146.124 58.8729 135.191ZM95.1704 115.145L103.202 115.768C112.366 116.479 116.433 114.083 118.523 111.13C121.613 106.762 123.679 99.8667 123.679 89.4612C123.679 88.9906 123.678 88.5352 123.675 88.0946H90.5324V0H170V89.1459C170 109.848 165.394 127.237 155.161 140.33C144.857 153.578 130.222 160 112.418 160C107.227 160 102.204 159.533 97.3648 158.575L89.5604 157.031L95.1704 115.145ZM148.433 135.191C157.145 124.047 161.501 108.699 161.501 89.1459V8.41H99.0316V79.6846H131.86C132.072 81.9973 132.179 85.2562 132.179 89.4612C132.179 100.815 129.947 109.645 125.485 115.953C121.023 122.26 113.374 124.993 102.538 124.152L99.0316 150.329C101.72 150.861 104.494 151.224 107.353 151.42C107.388 151.422 107.423 151.425 107.458 151.427C109.084 151.536 110.737 151.59 112.418 151.59C127.929 151.59 139.934 146.124 148.433 135.191Z'
        clipRule='evenodd'
        opacity='0.06'
      />
    </svg>
  ),
  arrowTop: ({ className }): ReactElement => (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='15'
      fill='none'
    >
      <path
        stroke='#929CAD'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.8'
        d='M14 14H8.42857C7.68975 14 6.9812 13.6839 6.45877 13.1213C5.93635 12.5587 5.64286 11.7956 5.64286 11V1M5.64286 1L1 6M5.64286 1L10.2857 6'
      />
    </svg>
  ),
  settings: ({ className }) => (
    <svg
      className={className}
      width='27'
      height='26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='13'
          y1='-0.542'
          x2='13'
          y2='26.542'
        >
          <stop offset='0.059' stopColor='#FFDAB9' />
          <stop offset='1' stopColor='#FFB675' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='13'
          y1='-0.542'
          x2='13'
          y2='26.542'
        >
          <stop offset='0.059' stopColor='#FFDAB9' />
          <stop offset='1' stopColor='#FFB675' />
        </linearGradient>
      </defs>
      <path
        d='M25.74 10.399a.813.813 0 00-.795-.65h-1.891a10.479 10.479 0 00-.648-1.558l1.336-1.337a.812.812 0 00.103-1.023 12.992 12.992 0 00-3.676-3.676.813.813 0 00-1.023.103l-1.337 1.336a10.474 10.474 0 00-1.558-.648V1.055a.813.813 0 00-.65-.796 13.173 13.173 0 00-5.2 0 .813.813 0 00-.65.796v1.891c-.536.174-1.057.39-1.559.648L6.855 2.258a.813.813 0 00-1.023-.103A12.993 12.993 0 002.157 5.83a.813.813 0 00.102 1.023L3.596 8.19a10.476 10.476 0 00-.648 1.558H1.057a.813.813 0 00-.796.65 13.103 13.103 0 000 5.2.813.813 0 00.796.65h1.891c.174.536.39 1.057.648 1.559l-1.337 1.337a.812.812 0 00-.102 1.023 12.993 12.993 0 003.675 3.675.813.813 0 001.023-.102l1.337-1.337c.502.258 1.023.474 1.559.648v1.891a.812.812 0 00.65.796 13.1 13.1 0 005.2 0 .812.812 0 00.65-.796v-1.891c.536-.174 1.057-.39 1.558-.648l1.337 1.337a.812.812 0 001.023.102 12.992 12.992 0 003.676-3.675.812.812 0 00-.103-1.023l-1.336-1.337a10.48 10.48 0 00.648-1.559h1.891a.813.813 0 00.796-.65 13.102 13.102 0 000-5.2zm-1.48 4.225h-1.816a.813.813 0 00-.787.61 8.883 8.883 0 01-.957 2.302.812.812 0 00.125.988l1.285 1.286a11.362 11.362 0 01-2.298 2.298l-1.286-1.285a.812.812 0 00-.988-.125 8.877 8.877 0 01-2.303.957.812.812 0 00-.609.787v1.817a11.52 11.52 0 01-3.25 0v-1.817a.813.813 0 00-.61-.787 8.88 8.88 0 01-2.302-.957.812.812 0 00-.988.125L6.19 22.108a11.364 11.364 0 01-2.297-2.297l1.284-1.287a.812.812 0 00.125-.988 8.88 8.88 0 01-.957-2.303.813.813 0 00-.787-.609H1.74a11.502 11.502 0 010-3.25h1.817a.812.812 0 00.787-.61c.209-.808.531-1.583.957-2.302a.813.813 0 00-.125-.988L3.892 6.188A11.362 11.362 0 016.19 3.89l1.286 1.285a.813.813 0 00.988.125 8.881 8.881 0 012.303-.957.813.813 0 00.609-.787V1.739a11.522 11.522 0 013.25 0v1.817a.812.812 0 00.61.787c.808.209 1.584.531 2.302.957a.813.813 0 00.988-.125l1.286-1.285a11.362 11.362 0 012.298 2.298l-1.285 1.286a.813.813 0 00-.125.988c.426.719.748 1.494.957 2.303a.813.813 0 00.787.609h1.817a11.497 11.497 0 010 3.25z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M13 8.938a4.063 4.063 0 100 8.125 4.063 4.063 0 000-8.125zm0 6.5a2.438 2.438 0 110-4.876 2.438 2.438 0 010 4.876z'
        fill='url(#paint1_linear)'
      />
    </svg>
  ),
  calendar: ({ className }) => (
    <svg
      className={className}
      width='24'
      height='24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.944 2.834H18.11V1.61a.611.611 0 00-1.222 0v1.223H7.111V1.61a.611.611 0 00-1.222 0v1.223H4.056A3.06 3.06 0 001 5.889v14.055A3.06 3.06 0 004.056 23h15.888A3.06 3.06 0 0023 19.944V5.888a3.06 3.06 0 00-3.056-3.054zm1.833 17.11c0 1.01-.823 1.832-1.833 1.832H4.056a1.835 1.835 0 01-1.834-1.833V8.944h19.555v11zm0-12.222H2.222V5.888c0-1.011.823-1.833 1.834-1.833H5.89v.611a.61.61 0 001.22 0v-.61h9.778v.61a.611.611 0 001.222 0v-.61h1.834c1.01 0 1.833.821 1.833 1.832v1.834z'
        fill='url(#paint0_linear)'
        stroke='url(#paint1_linear)'
        strokeWidth='.5'
      />
      <path
        d='M5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint2_linear)'
      />
      <path
        d='M5 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint3_linear)'
      />
      <path
        d='M10 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint4_linear)'
      />
      <path
        d='M10 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint5_linear)'
      />
      <path
        d='M15 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint6_linear)'
      />
      <path
        d='M15 16.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z'
        fill='url(#paint7_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='12'
          y1='1'
          x2='12'
          y2='23'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='12'
          y1='1'
          x2='12'
          y2='23'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint3_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint4_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint5_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint6_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
        <linearGradient
          id='paint7_linear'
          x1='12'
          y1='12'
          x2='12'
          y2='17.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#82C6A0' />
          <stop offset='1' stopColor='#5B9976' />
        </linearGradient>
      </defs>
    </svg>
  ),
  communicate: ({ className }) => (
    <svg
      className={className}
      width='24'
      height='28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.566 15.905H2.434c-.791 0-1.435-.618-1.435-1.379v-1.214c0-.76.644-1.38 1.435-1.38h19.13c.792 0 1.435.62 1.435 1.38v1.214c0 .76-.643 1.38-1.434 1.38zM2.434 12.701c-.354 0-.642.274-.642.61v1.215c0 .337.288.611.642.611h19.13c.354 0 .642-.274.642-.611v-1.214c0-.337-.288-.611-.642-.611H2.436z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M20.212 12.7H3.802a.393.393 0 01-.392-.323A8.026 8.026 0 013.8 8.27c.32-.865.785-1.67 1.382-2.392a8.611 8.611 0 012.094-1.825 8.837 8.837 0 012.633-1.095.406.406 0 01.34.071.38.38 0 01.151.303v4.892h3.213V3.332a.38.38 0 01.152-.303.407.407 0 01.34-.07c.934.221 1.82.59 2.63 1.094a8.614 8.614 0 012.093 1.825 8.23 8.23 0 011.383 2.392c.332.896.5 1.835.5 2.793 0 .446-.036.888-.107 1.314a.393.393 0 01-.392.323zm-16.066-.768h15.72c.034-.285.052-.575.052-.869 0-3.33-2.242-6.234-5.511-7.226v4.771a.39.39 0 01-.397.385h-4.006a.39.39 0 01-.397-.385v-4.77c-3.271.99-5.514 3.895-5.514 7.225 0 .287.018.578.053.868z'
        fill='url(#paint1_linear)'
      />
      <path
        d='M14 8.993H9.995a.39.39 0 01-.396-.385V1.691c0-.166.11-.314.274-.365a7.089 7.089 0 014.25 0 .386.386 0 01.275.365v6.917a.39.39 0 01-.396.385zm-3.609-.769h3.213V1.978a6.264 6.264 0 00-3.213 0v6.246z'
        fill='url(#paint2_linear)'
      />
      <path
        d='M12.005 27a9.746 9.746 0 01-3.681-.713 9.458 9.458 0 01-3.008-1.944 9.035 9.035 0 01-2.029-2.886 8.706 8.706 0 01-.744-3.536c0-.853.123-1.698.366-2.51a.395.395 0 01.38-.276h17.437c.2 0 .366.143.393.33.235.8.354 1.626.354 2.456 0 1.227-.25 2.416-.744 3.536a9.032 9.032 0 01-2.03 2.886 9.467 9.467 0 01-3.009 1.944 9.763 9.763 0 01-3.684.713zM3.593 15.903a8.01 8.01 0 00-.257 2.018c0 4.583 3.89 8.31 8.67 8.31 4.782 0 8.674-3.727 8.674-8.31 0-.68-.088-1.357-.26-2.018H3.592z'
        fill='url(#paint3_linear)'
      />
      <path
        d='M21.566 15.905H2.434c-.791 0-1.435-.618-1.435-1.379v-1.214c0-.76.644-1.38 1.435-1.38h19.13c.792 0 1.435.62 1.435 1.38v1.214c0 .76-.643 1.38-1.434 1.38zM2.434 12.701c-.354 0-.642.274-.642.61v1.215c0 .337.288.611.642.611h19.13c.354 0 .642-.274.642-.611v-1.214c0-.337-.288-.611-.642-.611H2.436z'
        stroke='url(#paint4_linear)'
      />
      <path
        d='M20.212 12.7H3.802a.393.393 0 01-.392-.323A8.026 8.026 0 013.8 8.27c.32-.865.785-1.67 1.382-2.392a8.611 8.611 0 012.094-1.825 8.837 8.837 0 012.633-1.095.406.406 0 01.34.071.38.38 0 01.151.303v4.892h3.213V3.332a.38.38 0 01.152-.303.407.407 0 01.34-.07c.934.221 1.82.59 2.63 1.094a8.614 8.614 0 012.093 1.825 8.23 8.23 0 011.383 2.392c.332.896.5 1.835.5 2.793 0 .446-.036.888-.107 1.314a.393.393 0 01-.392.323zm-16.066-.768h15.72c.034-.285.052-.575.052-.869 0-3.33-2.242-6.234-5.511-7.226v4.771a.39.39 0 01-.397.385h-4.006a.39.39 0 01-.397-.385v-4.77c-3.271.99-5.514 3.895-5.514 7.225 0 .287.018.578.053.868z'
        stroke='url(#paint5_linear)'
      />
      <path
        d='M14 8.993H9.995a.39.39 0 01-.396-.385V1.691c0-.166.11-.314.274-.365a7.089 7.089 0 014.25 0 .386.386 0 01.275.365v6.917a.39.39 0 01-.396.385zm-3.609-.769h3.213V1.978a6.264 6.264 0 00-3.213 0v6.246z'
        stroke='url(#paint6_linear)'
      />
      <path
        d='M12.005 27a9.746 9.746 0 01-3.681-.713 9.458 9.458 0 01-3.008-1.944 9.035 9.035 0 01-2.029-2.886 8.706 8.706 0 01-.744-3.536c0-.853.123-1.698.366-2.51a.395.395 0 01.38-.276h17.437c.2 0 .366.143.393.33.235.8.354 1.626.354 2.456 0 1.227-.25 2.416-.744 3.536a9.032 9.032 0 01-2.03 2.886 9.467 9.467 0 01-3.009 1.944 9.763 9.763 0 01-3.684.713zM3.593 15.903a8.01 8.01 0 00-.257 2.018c0 4.583 3.89 8.31 8.67 8.31 4.782 0 8.674-3.727 8.674-8.31 0-.68-.088-1.357-.26-2.018H3.592z'
        stroke='url(#paint7_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint2_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint3_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint4_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint5_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint6_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
        <linearGradient
          id='paint7_linear'
          x1='12.008'
          y1='1'
          x2='12.008'
          y2='27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#849FFB' />
          <stop offset='1' stopColor='#486CE3' />
        </linearGradient>
      </defs>
    </svg>
  ),
  messaging: ({ className }) => (
    <svg
      className={className}
      width='22'
      height='22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.135 0h15.73C20.59 0 22 1.442 22 3.204v10.69c0 1.763-1.412 3.204-3.135 3.204h-6.881L6.167 21.81c-.562.456-1.377.035-1.377-.679l-.002-4.033H3.135C1.409 17.098 0 15.658 0 13.894V3.204C0 1.44 1.409 0 3.135 0zm2.198 9.95c.664 0 1.202.549 1.202 1.227s-.538 1.227-1.202 1.227c-.663 0-1.2-.55-1.2-1.227 0-.678.537-1.227 1.2-1.227zm9.41 0c.662 0 1.2.549 1.2 1.227s-.538 1.227-1.2 1.227c-.664 0-1.202-.55-1.202-1.227 0-.678.538-1.227 1.201-1.227zm-4.705 0c.663 0 1.201.549 1.201 1.227s-.538 1.227-1.201 1.227c-.664 0-1.201-.55-1.201-1.227 0-.678.537-1.227 1.2-1.227zm-1.05-4.386c-1.12 0-1.12-1.739 0-1.739h8.88c1.119 0 1.119 1.739 0 1.739h-8.88zm9.877-3.826H3.135c-.787 0-1.434.661-1.434 1.466v10.69c0 .805.647 1.466 1.434 1.466H5.64c.47 0 .85.39.85.869v3.106l4.633-3.754a.837.837 0 01.567-.221h7.175c.789 0 1.434-.659 1.434-1.466V3.204c0-.806-.646-1.466-1.434-1.466z'
        fill='url(#MessagingPaint0Linear)'
      />
      <defs>
        <linearGradient
          id='MessagingPaint0Linear'
          x1='11'
          y1='0'
          x2='11'
          y2='22.393'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC7BC' />
          <stop offset='.582' stopColor='#FE9682' />
        </linearGradient>
      </defs>
    </svg>
  ),
  linkedin: ({ isMobile, className }) =>
    isMobile ? (
      <svg
        className={className}
        width='40'
        height='40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='19' stroke='#ECF0F4' />
        <path
          d='M29.1407 27.7399v-.0007h.0042v-6.1936c0-3.0299-.6523-5.364-4.1945-5.364-1.7029 0-2.8456.9345-3.3121 1.8204h-.0493v-1.5375h-3.3585v11.2747h3.4971v-5.5828c0-1.4699.2787-2.8913 2.0991-2.8913 1.7936 0 1.8203 1.6775 1.8203 2.9856v5.4892h3.4937zM12.5352 16.4648h3.5014v11.2747h-3.5014V16.4648zM14.2858 10.8516c-1.1196 0-2.028.9084-2.028 2.0279s.9084 2.0469 2.028 2.0469c1.1195 0 2.0279-.9274 2.0279-2.0469-.0007-1.1195-.9091-2.0279-2.0279-2.0279z'
          fill='#4865EB'
        />
      </svg>
    ) : (
      <svg
        className={className}
        width='56'
        height='56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='28' cy='28' r='27' stroke='#ECF0F4' />
        <path
          d='M40.9923 38.9991v-.001h.006v-8.8014c0-4.3057-.927-7.6225-5.9607-7.6225-2.4198 0-4.0437 1.3279-4.7066 2.5868h-.07v-2.1848h-4.7727v16.0219h4.9697v-7.9334c0-2.0889.3959-4.1088 2.9828-4.1088 2.5488 0 2.5868 2.3839 2.5868 4.2427v7.8005h4.9647zM17.3945 22.9766h4.9757v16.0219h-4.9757V22.9766zM19.8818 15C18.2909 15 17 16.2909 17 17.8818c0 1.5909 1.2909 2.9088 2.8818 2.9088 1.5909 0 2.8818-1.3179 2.8818-2.9088C22.7626 16.2909 21.4717 15 19.8818 15z'
          fill='#4865EB'
        />
      </svg>
    ),

  twitter: ({ isMobile, className }) =>
    isMobile ? (
      <svg
        className={className}
        width='40'
        height='40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='19' stroke='#ECF0F4' />
        <path
          d='M16.87 27.74c6.3735 0 9.8589-5.4142 9.8589-10.1091 0-.1537-.0031-.3069-.0099-.4592.6765-.5015 1.2645-1.1274 1.7285-1.8398-.6209.2831-1.2891.4734-1.9899.5595.7154-.4401 1.2646-1.1358 1.5237-1.9653-.6695.407-1.411.7027-2.2003.8624-.6323-.6906-1.5326-1.1225-2.5294-1.1225-1.9134 0-3.4652 1.5911-3.4652 3.5524 0 .279.0305.5501.0899.8102-2.8799-.1486-5.4336-1.5623-7.1425-3.7121-.2974.5249-.4691 1.1349-.4691 1.7858 0 1.2325.6118 2.3209 1.5419 2.9574-.5684-.0179-1.1024-.1779-1.5692-.4443-.0005.015-.0005.0295-.0005.0454 0 1.7207 1.1943 3.1574 2.78 3.4829-.2912.0812-.5977.125-.9137.125-.2229 0-.4402-.0225-.6513-.0641.4411 1.4117 1.7203 2.439 3.237 2.4678-1.186.9531-2.68 1.5209-4.3037 1.5209-.2793 0-.5554-.0165-.8266-.0493 1.5335 1.0079 3.3545 1.5961 5.3115 1.5961'
          fill='#4865EB'
        />
      </svg>
    ) : (
      <svg
        className={className}
        width='56'
        height='56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='28' cy='28' r='27' stroke='#ECF0F4' />
        <path
          d='M23.5478 38.9999c9.057 0 14.0099-7.6939 14.0099-14.3655 0-.2185-.0044-.4362-.0139-.6526.9613-.7127 1.7969-1.6021 2.4562-2.6145-.8822.4023-1.8318.6727-2.8277.795 1.0166-.6253 1.7971-1.614 2.1652-2.7927-.9514.5784-2.005.9985-3.1267 1.2255C35.3123 19.6137 34.0329 19 32.6164 19c-2.719 0-4.9243 2.261-4.9243 5.0482 0 .3964.0433.7817.1277 1.1513-4.0924-.2112-7.7214-2.2201-10.1497-5.2752-.4227.746-.6666 1.6129-.6666 2.5378 0 1.7515.8693 3.2981 2.1911 4.2026-.8078-.0254-1.5666-.2528-2.23-.6313-.0008.0212-.0008.0418-.0008.0644 0 2.4452 1.6973 4.4868 3.9507 4.9495-.4139.1154-.8494.1775-1.2985.1775-.3168 0-.6256-.0319-.9256-.091.6269 2.0061 2.4448 3.4659 4.6 3.5068-1.6854 1.3545-3.8084 2.1613-6.1158 2.1613-.3969 0-.7892-.0234-1.1746-.07C18.1792 38.1642 20.7669 39 23.5479 39'
          fill='#4865EB'
        />
      </svg>
    ),

  facebook: ({ isMobile, className }) =>
    isMobile ? (
      <svg
        className={className}
        width='40'
        height='40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='19' stroke='#ECF0F4' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.5038 25.0771l.6559-4.1241h-4.1056v-2.6757c0-1.1273.5725-2.2284 2.413-2.2284h1.8675v-3.5103s-1.6946-.2788-3.3145-.2788c-3.381 0-5.5921 1.9738-5.5921 5.5502v3.1432h-3.76v4.124h3.76V38.47c.7537.1142 1.5261.1931 2.3131.1931.7869 0 1.5594-.0046 2.313-.1168V25.0772l3.4497-.0001z'
          fill='#4864EB'
        />
      </svg>
    ) : (
      <svg
        className={className}
        width='56'
        height='56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='28' cy='28' r='27' stroke='#ECF0F4' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M35.8194 35.2141l.932-5.8605h-5.8343v-3.8023c0-1.602.8136-3.1668 3.429-3.1668H37v-4.9883S34.5918 17 32.2899 17c-4.8047 0-7.9467 2.8049-7.9467 7.8871v4.4667H19v5.8605h5.3432v19.0318c1.071.1622 2.1686.2745 3.287.2745 1.1183 0 2.216-.0066 3.2869-.166V35.2143l4.9023-.0002z'
          fill='#4864EB'
        />
      </svg>
    ),
}

type IconProps = {
  name: string
  color?: string
  className?: string
}

export default function IconWrapper({
  name,
  ...props
}: IconProps): ReactElement {
  const { isMobile } = useDeviceDetect()
  const Icon = icons[name]
  return <Icon {...props} isMobile={isMobile} />
}
