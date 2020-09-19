import { RefObject, useEffect, useState } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: () => void,
  active = true
) => {
  useEffect(() => {
    if (!active) return
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      const refs = Array.isArray(ref) ? ref : [ref]

      let contains = false
      refs.forEach(r => {
        if (!r.current || r.current.contains(event.target)) {
          contains = true
          return
        }
      })
      event.stopPropagation()
      if (!contains) handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      if (!active) return
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, active])
}

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(detectMobileDevice())
    window.addEventListener('resize', e => {
      setIsMobile(detectMobileDevice())
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return {
    isMobile,
  }
}

function detectMobileDevice() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 800
  }
  return false
}
