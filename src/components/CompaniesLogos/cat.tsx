import React from 'react'
import { isMobile } from 'react-device-detect'

export default function CatLogo() {
  return isMobile ? (
    <svg width='66' height='35' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.442 29.061c1.31-1.094 1.537-2.452 1.537-3.666v-5.114h-7.126v6.939c0 .99-.804 1.796-1.793 1.796-.99 0-1.727-.804-1.727-1.796V7.563c0-.991.736-1.795 1.727-1.795.988 0 1.793.803 1.793 1.795v6.981h7.118V7.303C17.971 3.302 15.36.009 9 0 2.469 0 0 3.308 0 7.31v20.52c0 3.967 3.144 6.969 7.164 6.968h2.208l7.07-5.737zm28.1.805V7.316h-4.917V.672h17.802v6.644h-4.944V34.76h-2.108l-5.833-4.894z'
        fill='#5C6E80'
      />
      <path
        opacity='.6'
        d='M47.733 34.806L30.395 20.26 12.43 34.806h35.303z'
        fill='#5C6E80'
      />
      <path
        d='M35.349.707h-9.933l-5.787 26.001L30.404 18l11.235 9.428L35.35.707zm-6.867 15.626l1.922-9.827 1.907 9.827h-3.829zM62.84 1.753c.554 0 1.028.196 1.42.59.389.393.584.866.584 1.421 0 .56-.195 1.036-.585 1.43-.39.394-.862.59-1.42.59a1.918 1.918 0 01-1.419-.59 1.959 1.959 0 01-.582-1.43c0-.554.195-1.028.585-1.42a1.93 1.93 0 011.417-.591zm2.339 2.007c0-.643-.228-1.192-.683-1.644a2.255 2.255 0 00-1.65-.679 2.238 2.238 0 00-1.642.679 2.238 2.238 0 00-.682 1.644c0 .648.225 1.2.675 1.654a2.232 2.232 0 001.649.686 2.24 2.24 0 001.65-.686 2.26 2.26 0 00.683-1.654zm-1.715-.501c0 .195-.09.328-.266.398-.14.044-.287.063-.433.057h-.41v-.922h.388c.505 0 .72.097.72.467zm-1.56-.783v2.557h.45V4.03h.358c.24 0 .407.027.503.082.162.095.242.29.242.584v.202l.01.082c.001.01.003.02.006.029l.007.024h.419l-.016-.03c-.027-.201-.029-.51-.029-.51a.659.659 0 00-.57-.644c.453-.075.615-.28.615-.63 0-.323-.132-.54-.397-.65-.15-.063-.383-.093-.7-.093h-.899z'
        fill='#5C6E80'
      />
    </svg>
  ) : (
    <svg width='76' height='41' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19.23 33.762c1.524-1.271 1.787-2.849 1.787-4.259v-5.941h-8.28v8.06a2.086 2.086 0 01-2.082 2.088c-1.152 0-2.006-.934-2.006-2.087V8.787c0-1.152.854-2.086 2.006-2.086 1.147 0 2.082.933 2.082 2.086v8.11h8.27V8.484C21.006 3.836 17.973.011 10.583 0 2.998 0 .13 3.844.13 8.492v23.84c0 4.609 3.653 8.096 8.322 8.095h2.566l8.214-6.665zm32.646.936V8.499h-5.712V.781h20.682v7.718h-5.745v31.884h-2.448l-6.777-5.685z'
        fill='#5C6E80'
      />
      <path
        opacity='.6'
        d='M55.581 40.437l-20.143-16.9-20.872 16.9h41.015z'
        fill='#5C6E80'
      />
      <path
        d='M41.193.822h-11.54L22.93 31.03l12.518-10.117 13.053 10.953L41.193.822zm-7.978 18.154L35.448 7.56l2.216 11.417h-4.449zM73.13 2.037c.644 0 1.194.229 1.649.687.452.456.679 1.005.679 1.65 0 .65-.227 1.203-.68 1.66a2.232 2.232 0 01-1.648.687 2.228 2.228 0 01-1.65-.687 2.276 2.276 0 01-.676-1.66c0-.643.227-1.194.68-1.65a2.241 2.241 0 011.646-.687zm2.717 2.332c0-.747-.264-1.384-.793-1.91a2.62 2.62 0 00-1.918-.789 2.6 2.6 0 00-1.906.79 2.6 2.6 0 00-.794 1.909c0 .753.262 1.394.785 1.922a2.593 2.593 0 001.915.797c.75 0 1.39-.265 1.918-.797.529-.531.793-1.172.793-1.922zm-1.993-.582c0 .227-.103.382-.308.462-.163.051-.333.073-.504.066h-.476V3.244h.45c.587 0 .838.113.838.543zm-1.813-.91V5.85h.525V4.682h.415c.279 0 .473.03.585.095.188.11.28.336.28.678v.235l.012.095a.24.24 0 00.007.034l.008.028h.487l-.019-.036c-.03-.233-.033-.591-.033-.591a.765.765 0 00-.662-.749c.526-.087.714-.325.714-.732 0-.375-.153-.627-.462-.756-.173-.072-.444-.107-.813-.107h-1.044v.001z'
        fill='#5C6E80'
      />
    </svg>
  )
}
