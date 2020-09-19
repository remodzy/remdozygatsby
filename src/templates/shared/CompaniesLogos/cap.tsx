import React, { useContext } from 'react'
import { DeviceDetectContext } from '~components/layout'

export default function SapLogo() {
  const { isMobile } = useContext(DeviceDetectContext)

  return isMobile ? (
    <svg width='71' height='35' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 34.81h35.513L70.338 0H0v34.81z' fill='#5C6E80' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M41.704 6.54h-6.882v16.465L28.766 6.539h-5.92l-5.23 13.77c-.55-3.468-4.13-4.667-7.02-5.565-1.79-.602-3.854-1.489-3.716-2.458 0-.804.963-1.541 3.028-1.431 1.376.07 2.615.184 5.093 1.365l2.478-4.194c-2.34-1.134-5.369-1.851-7.846-1.854-3.029 0-5.506.952-7.02 2.531C1.649 9.802.96 11.196.96 12.742c0 2.126.826 3.635 2.34 4.837 1.514 1.011 3.166 1.67 4.818 2.154 1.927.596 3.44 1.112 3.44 2.219 0 .408-.137.78-.412 1.079-.55.494-1.239.681-2.34.705-1.927.035-3.304-.272-5.644-1.638L.961 26.344c2.34 1.316 5.093 2.09 7.846 2.09l.413-.003c2.34-.044 4.404-.74 5.918-2.003.138-.074.138-.143.276-.212l-.688 1.849h6.331l.964-3.205c1.101.37 2.34.584 3.716.584 1.377 0 2.478-.208 3.58-.558l1.1 3.179h10.186v-6.647h2.34c5.368 0 8.534-2.755 8.534-7.374 0-5.143-3.028-7.503-9.773-7.503zM25.737 20.638a6.206 6.206 0 01-2.202-.393l2.202-6.927 2.203 6.948a6.527 6.527 0 01-2.203.372zm16.38-3.983h-1.514v-5.585h1.514c2.065 0 3.717.676 3.717 2.764 0 2.148-1.652 2.82-3.717 2.82z'
        fill='#fff'
      />
      <path
        d='M44.183 32.584c0-1.064.826-1.875 1.79-1.875.963 0 1.79.811 1.79 1.875 0 1.104-.827 1.9-1.79 1.9-.964 0-1.79-.796-1.79-1.9zm1.79 2.277c1.239 0 2.34-.965 2.34-2.277 0-1.292-1.101-2.242-2.34-2.242-1.239 0-2.34.95-2.34 2.242 0 1.312 1.101 2.277 2.34 2.277zm-.413-2.088h.413l.688 1.123h.413l-.688-1.145c.275-.047.688-.25.688-.712 0-.519-.413-.747-.963-.747h-.964v2.604h.413v-1.123zm0-.336v-.814h.55c.138 0 .551.064.551.393 0 .395-.413.42-.688.42h-.413z'
        fill='#5C6E80'
      />
    </svg>
  ) : (
    <svg width='82' height='41' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M.285 40.44h41.258L82 0H.285v40.44z' fill='#5C6E80' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M48.737 7.6L40.74 7.6v19.129l-7.036-19.13h-6.876l-6.077 15.999c-.64-4.03-4.797-5.423-8.156-6.466-2.079-.7-4.477-1.73-4.317-2.856 0-.934 1.119-1.79 3.518-1.663 1.599.082 3.038.214 5.916 1.586l2.879-4.872c-2.719-1.318-6.237-2.15-9.115-2.154-3.518 0-6.397 1.106-8.156 2.94-1.12 1.277-1.919 2.897-1.919 4.693 0 2.47.96 4.223 2.719 5.619 1.759 1.175 3.678 1.941 5.597 2.503 2.239.692 3.998 1.292 3.998 2.577 0 .475-.16.907-.48 1.254-.64.574-1.44.792-2.719.819-2.238.041-3.838-.315-6.556-1.903l-2.559 4.933c2.719 1.529 5.917 2.428 9.115 2.428l.48-.003c2.719-.052 5.117-.86 6.876-2.327.16-.087.16-.167.32-.246l-.8 2.147h7.357l1.12-3.723c1.278.429 2.718.678 4.317.678 1.599 0 2.878-.241 4.157-.647l1.28 3.692h11.833v-7.722h2.719c6.237 0 9.915-3.2 9.915-8.567 0-5.974-3.519-8.717-11.354-8.717zm-18.55 16.377c-.96 0-1.76-.166-2.559-.457l2.559-8.047 2.558 8.072c-.8.275-1.599.432-2.558.432zm19.03-4.628h-1.76v-6.487h1.76c2.398 0 4.317.785 4.317 3.21 0 2.495-1.919 3.277-4.317 3.277z'
        fill='#fff'
      />
      <path
        d='M51.616 37.857c0-1.236.96-2.178 2.08-2.178 1.119 0 2.078.942 2.078 2.178 0 1.282-.96 2.207-2.079 2.207-1.12 0-2.079-.925-2.079-2.207zm2.08 2.645c1.438 0 2.718-1.121 2.718-2.645 0-1.502-1.28-2.605-2.719-2.605-1.44 0-2.718 1.103-2.718 2.605 0 1.524 1.279 2.645 2.718 2.645zm-.48-2.426h.48l.799 1.305h.48l-.8-1.33c.32-.055.8-.29.8-.827 0-.603-.48-.869-1.12-.869h-1.12v3.026h.48v-1.305zm0-.39v-.945h.639c.16 0 .64.073.64.456 0 .459-.48.489-.8.489h-.48z'
        fill='#5C6E80'
      />
    </svg>
  )
}