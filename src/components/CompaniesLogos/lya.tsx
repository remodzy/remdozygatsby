import { useDeviceDetect } from '~utils/hooks'

export default function LyaLogo() {
  const { isMobile } = useDeviceDetect()

  return isMobile ? (
    <svg width='52' height='36' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 .617h7.836v20.342c0 3.22 1.523 5.137 2.727 5.96-1.275 1.095-5.17 2.054-8.073-.275C.778 25.271 0 23.014 0 20.891V.617zm48.974 16.898v-2.138h2.39v-7.5h-2.625C47.732 3.374 43.587 0 38.631 0c-5.71 0-10.339 4.477-10.339 10v17.515c1.627.22 3.565-.028 5.214-1.35 1.711-1.373 2.49-3.63 2.49-5.754v-.645h3.913v-7.5h-3.913V10h.01c0-1.402 1.175-2.54 2.625-2.54s2.63 1.138 2.63 2.54v7.515c0 5.523 4.633 10 10.343 10v-7.46c-1.45 0-2.63-1.138-2.63-2.54zM19.295 7.877v11.007c0 .625-.536 1.131-1.197 1.131-.662 0-1.198-.506-1.198-1.131V7.877H9.146v12.945c0 2.329.817 5.274 4.532 6.233 3.72.96 5.878-1.027 5.878-1.027-.197 1.309-1.472 2.268-3.525 2.474-1.554.155-3.54-.343-4.532-.754v6.858c2.526.72 5.197.954 7.811.463 4.744-.89 7.739-4.726 7.739-9.829V7.877h-7.754z'
        fill='#5C6E80'
      />
    </svg>
  ) : (
    <svg width='60' height='42' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.047.716H9.15V24.35c0 3.74 1.769 5.968 3.167 6.923-1.48 1.273-6.005 2.387-9.378-.319C.95 29.36.047 26.737.047 24.27V.716zm56.896 19.632v-2.484h2.777V9.151h-3.05C55.5 3.92 50.686 0 44.928 0c-6.634 0-12.01 5.202-12.01 11.618v20.348c1.889.257 4.14-.032 6.056-1.569 1.988-1.595 2.893-4.217 2.893-6.684v-.75h4.547V14.25h-4.547v-2.632h.01c0-1.63 1.366-2.95 3.051-2.95 1.684 0 3.056 1.32 3.056 2.95v8.73c0 6.416 5.383 11.618 12.016 11.618v-8.668c-1.685 0-3.056-1.32-3.056-2.95zM22.463 9.151V21.94c0 .726-.623 1.314-1.39 1.314-.77 0-1.392-.588-1.392-1.314V9.15h-9.008v15.04c0 2.705.948 6.127 5.265 7.24 4.321 1.116 6.828-1.193 6.828-1.193-.228 1.521-1.71 2.635-4.095 2.874-1.805.18-4.113-.398-5.265-.875v7.968c2.934.837 6.038 1.107 9.075.537 5.511-1.034 8.99-5.49 8.99-11.419V9.151h-9.008z'
        fill='#5C6E80'
      />
    </svg>
  )
}
