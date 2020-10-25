import React, { memo } from 'react'

import { useDeviceDetect } from '~utils/hooks'

export default function Logo() {
  const { isMobile } = useDeviceDetect()
  return isMobile ? <MobileLogo /> : <DesktopLogo />
}

const MobileLogo = memo(() => (
  <svg width='112' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.6 15.753h-2.524v3.031a.966.966 0 01-.963.967H6.05a.967.967 0 01-.97-.965V5.079a.968.968 0 01.945-.967l2.92-.071h3.76c2.204.073 3.426.756 4.193 1.39a6.72 6.72 0 011.625 1.893c.442.796.67 1.694.66 2.605a5.486 5.486 0 01-1.728 4.003c.144.301 3.543 4.405 5.873 7.206V4.218A4.215 4.215 0 0020.722.32 4.22 4.22 0 0019.107 0H3.639A3.64 3.64 0 000 3.638v15.289a3.635 3.635 0 003.64 3.636h14.498l-5.295-6.832-.243.022z'
      fill='url(#MobileLogoPaint0Linear)'
    />
    <path
      d='M13.76 8.947a2.172 2.172 0 00-1.188-.37h-1.83a.772.772 0 00-.527.205.68.68 0 00-.219.495v1.237a.68.68 0 00.219.496c.14.131.33.205.528.205h1.877c.411-.01.81-.137 1.144-.363a1.06 1.06 0 00.385-.41.982.982 0 00.11-.536 1.002 1.002 0 00-.112-.543 1.08 1.08 0 00-.387-.416z'
      fill='url(#MobileLogoPaint1Linear)'
    />
    <path
      d='M41.67 19.699l-2.352-4.785c1.484-.672 2.171-2.096 2.171-3.852 0-2.169-1.031-3.835-3.365-4.193a8.248 8.248 0 00-1.085-.072h-5.5v12.902H34v-4.372h2.741l2.144 4.372h2.786zM34 9.073h2.93c.254 0 .58.018.832.09.995.268 1.249 1.2 1.249 1.899 0 .699-.254 1.63-1.249 1.9-.253.07-.578.089-.832.089H34V9.073zM45.767 15.542h6.857c.298-3.513-1.493-5.788-4.569-5.788-2.894 0-4.938 2.06-4.938 5.232 0 2.903 2.08 4.982 5.083 4.982 1.882 0 3.6-1.022 4.342-2.796l-2.46-.699c-.362.789-1.068 1.219-2.026 1.219-1.33 0-2.108-.77-2.289-2.15zm2.397-3.674c1.185 0 1.8.556 1.972 1.864H45.83c.254-1.228 1.013-1.864 2.334-1.864zM65.238 9.79c-1.257 0-2.352.573-2.985 1.505-.506-.905-1.438-1.506-2.84-1.506-1.176 0-2.207.493-2.858 1.29v-1.057h-2.171V19.7h2.478v-5.86c0-1.11.67-1.881 1.7-1.881 1.068 0 1.72.752 1.72 2.025v5.716h2.46v-5.86c0-1.11.67-1.881 1.7-1.881 1.068 0 1.719.752 1.719 2.025v5.716h2.46v-6.362c0-2.114-1.157-3.548-3.383-3.548zM75.194 19.968c2.93 0 4.957-2.097 4.957-5.107 0-2.993-2.008-5.107-4.957-5.107-2.895 0-4.94 2.078-4.94 5.107 0 2.992 1.99 5.107 4.94 5.107zm0-2.276c-1.538 0-2.334-1.093-2.334-2.831 0-1.685.724-2.832 2.334-2.832 1.555 0 2.352 1.111 2.352 2.832 0 1.666-.779 2.83-2.352 2.83zM88.436 6.797v3.548c-.606-.376-1.348-.591-2.207-.591-2.804 0-4.631 2.15-4.631 5.107 0 2.903 1.809 5.107 4.504 5.107 1.077 0 1.954-.305 2.642-.825v.556h2.17V6.797h-2.478zM86.5 17.799c-1.592 0-2.297-1.308-2.297-2.938 0-1.613.742-2.94 2.388-2.94 1.538 0 2.153 1.184 2.153 2.94s-.597 2.938-2.244 2.938zM92.543 19.699h8.413v-2.115h-4.595l4.776-7.257v-.305h-8.05v2.115h4.25l-4.794 7.257v.305zM109.539 10.022l-2.551 6.586-2.569-6.586h-2.551l3.944 9.596-1.61 4.382h2.279l5.518-13.978h-2.46z'
      fill='#000'
    />
    <defs>
      <linearGradient
        id='MobileLogoPaint0Linear'
        x1='-2.785'
        y1='-1.439'
        x2='42.428'
        y2='38.933'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.19' stopColor='#465FEE' />
        <stop offset='.31' stopColor='#414FD9' />
        <stop offset='.57' stopColor='#3834B5' />
        <stop offset='.7' stopColor='#3429A7' />
      </linearGradient>
      <linearGradient
        id='MobileLogoPaint1Linear'
        x1='9.125'
        y1='5.666'
        x2='20.787'
        y2='25.253'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.19' stopColor='#465FEE' />
        <stop offset='.42' stopColor='#3E4AD1' />
      </linearGradient>
    </defs>
  </svg>
))

const DesktopLogo = memo(() => (
  <svg width='174' height='38' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.576 24.724h-3.922v4.758c0 .401-.158.786-.438 1.07-.28.285-.661.445-1.059.447H9.398a1.489 1.489 0 01-1.063-.442 1.518 1.518 0 01-.442-1.072V7.97c.001-.396.155-.776.428-1.06a1.498 1.498 0 011.039-.457l4.537-.112h5.842c3.423.115 5.321 1.187 6.513 2.183a10.519 10.519 0 012.525 2.97 8.321 8.321 0 011.026 4.088 8.689 8.689 0 01-.699 3.423 8.616 8.616 0 01-1.987 2.86c.224.474 5.504 6.913 9.124 11.31V6.62c0-.87-.17-1.73-.5-2.534a6.625 6.625 0 00-1.42-2.147A6.551 6.551 0 0032.192.503 6.5 6.5 0 0029.683 0H5.654c-1.5 0-2.938.602-3.998 1.672A5.738 5.738 0 000 5.71v23.997c0 .75.146 1.492.43 2.184.285.693.701 1.322 1.226 1.852s1.149.95 1.835 1.237a5.601 5.601 0 002.163.434h22.524L19.952 24.69l-.377.033z'
      fill='url(#DesktopLogoPaint0Linear)'
    />
    <path
      d='M21.379 14.044a3.352 3.352 0 00-1.846-.583h-2.842c-.307 0-.602.116-.82.322-.218.207-.34.487-.34.778v1.941c0 .292.122.572.34.778.217.207.513.323.82.323h2.917a3.305 3.305 0 001.777-.57c.256-.16.463-.381.598-.643.135-.26.194-.552.17-.842a1.585 1.585 0 00-.172-.852 1.69 1.69 0 00-.602-.652z'
      fill='url(#DesktopLogoPaint1Linear)'
    />
    <path
      d='M64.74 30.918l-3.654-7.51c2.304-1.054 3.372-3.29 3.372-6.046 0-3.403-1.602-6.019-5.227-6.581-.535-.085-1.293-.113-1.687-.113H49v20.25h3.822v-6.863h4.258l3.331 6.863h4.328zM52.821 14.24h4.553c.394 0 .9.028 1.293.14 1.546.422 1.94 1.885 1.94 2.982 0 1.097-.394 2.56-1.94 2.981-.393.113-.899.14-1.292.14h-4.554V14.24zM71.104 24.393h10.652c.464-5.512-2.319-9.084-7.097-9.084-4.497 0-7.672 3.234-7.672 8.212 0 4.556 3.232 7.819 7.897 7.819 2.923 0 5.593-1.603 6.746-4.388l-3.823-1.097c-.562 1.238-1.658 1.913-3.148 1.913-2.065 0-3.274-1.21-3.555-3.375zm3.724-5.766c1.841 0 2.797.872 3.064 2.925h-6.69c.394-1.926 1.574-2.925 3.626-2.925zM101.354 15.365c-1.953 0-3.654.9-4.638 2.362-.786-1.42-2.234-2.362-4.412-2.362-1.827 0-3.43.773-4.44 2.025v-1.66H84.49v15.188h3.85v-9.197c0-1.744 1.04-2.953 2.643-2.953 1.658 0 2.67 1.181 2.67 3.178v8.972h3.822v-9.197c0-1.744 1.04-2.953 2.642-2.953 1.659 0 2.67 1.181 2.67 3.178v8.972h3.823v-9.984c0-3.32-1.799-5.57-5.256-5.57zM116.82 31.34c4.553 0 7.701-3.29 7.701-8.016 0-4.697-3.12-8.015-7.701-8.015-4.497 0-7.673 3.262-7.673 8.015 0 4.697 3.092 8.016 7.673 8.016zm0-3.572c-2.389 0-3.626-1.716-3.626-4.444 0-2.644 1.125-4.444 3.626-4.444 2.417 0 3.654 1.744 3.654 4.444 0 2.616-1.209 4.444-3.654 4.444zM137.393 10.668v5.569c-.941-.59-2.094-.928-3.429-.928-4.356 0-7.195 3.375-7.195 8.015 0 4.556 2.811 8.016 6.999 8.016 1.672 0 3.035-.478 4.103-1.294v.872h3.373v-20.25h-3.851zm-3.007 17.269c-2.473 0-3.57-2.053-3.57-4.613 0-2.531 1.153-4.612 3.71-4.612 2.389 0 3.345 1.856 3.345 4.612 0 2.756-.927 4.613-3.485 4.613zM143.774 30.918h13.069v-3.319h-7.138l7.42-11.39v-.479h-12.508v3.32h6.605l-7.448 11.39v.478zM170.178 15.73l-3.963 10.336-3.991-10.335h-3.963l6.127 15.06-2.502 6.877h3.542L174 15.73h-3.822z'
      fill='#000'
    />
    <defs>
      <linearGradient
        id='DesktopLogoPaint0Linear'
        x1='-4.326'
        y1='-2.259'
        x2='66.551'
        y2='60.387'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.19' stopColor='#465FEE' />
        <stop offset='.31' stopColor='#414FD9' />
        <stop offset='.57' stopColor='#3834B5' />
        <stop offset='.7' stopColor='#3429A7' />
      </linearGradient>
      <linearGradient
        id='DesktopLogoPaint1Linear'
        x1='14.177'
        y1='8.894'
        x2='32.57'
        y2='39.47'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.19' stopColor='#465FEE' />
        <stop offset='.42' stopColor='#3E4AD1' />
      </linearGradient>
    </defs>
  </svg>
))
