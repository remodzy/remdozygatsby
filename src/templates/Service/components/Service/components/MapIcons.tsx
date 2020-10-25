import mapStyles from './MapIcon.module.css'

export function MapIcon1({ isMobile = false }) {
  const top = isMobile ? -40 : 0
  const left = isMobile ? '57.07%' : '62.875%'
  const size = isMobile ? 20 : 40

  return (
    <div className={mapStyles.map} style={{ top, left }}>
      <svg
        width={size}
        height={size}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {isMobile ? (
          <g opacity='.7'>
            <circle cx='10' cy='10' r='10' fill='#97BFAB' />
            <circle cx='10.002' cy='10.002' r='8.095' fill='#5B9976' />
            <path
              d='M11.846 10.175a2.414 2.414 0 10-3.693 0l.285.356a2 2 0 003.124 0l.284-.356zM10 7.865a.756.756 0 110 1.513.756.756 0 010-1.513zM10.003 13.93c.8 0 1.448-.216 1.448-.482 0-.267-.648-.483-1.448-.483-.8 0-1.448.216-1.448.483 0 .266.648.482 1.448.482z'
              fill='#fff'
            />
          </g>
        ) : (
          <>
            <circle cx='20' cy='20' r='20' fill='#7177C2' />
            <circle cx='19.999' cy='19.999' r='16.191' fill='#5A60A6' />
            <path
              d='M23.692 20.35a4.828 4.828 0 10-7.385 0l2.131 2.664a2 2 0 003.123 0l2.131-2.663zM20 15.73a1.513 1.513 0 110 3.025 1.513 1.513 0 010-3.026zM19.998 27.863c1.6 0 2.897-.433 2.897-.966 0-.533-1.297-.965-2.897-.965-1.6 0-2.896.432-2.896.965 0 .534 1.296.966 2.896.966z'
              fill='#fff'
            />
          </>
        )}
      </svg>
    </div>
  )
}

export function MapIcon2({ isMobile = false }) {
  const top = isMobile ? 218 : 'initial'
  const bottom = isMobile ? 'initial' : 19
  const left = isMobile ? '36.53%' : '64.125%'
  const size = isMobile ? 15 : 32

  return (
    <div className={mapStyles.map} style={{ top, bottom, left }}>
      <svg
        width={size}
        height={size}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {isMobile ? (
          <>
            <circle cx='7.5' cy='7.5' r='7.5' fill='#FE958C' />
            <circle cx='7.501' cy='7.499' r='6.071' fill='#FC7266' />
            <path
              d='M8.887 7.63a1.81 1.81 0 10-2.77 0c.71.888 2.06.888 2.77 0zM7.502 5.897a.567.567 0 110 1.135.567.567 0 010-1.135zM7.5 10.449c.6 0 1.087-.162 1.087-.362 0-.2-.487-.362-1.087-.362s-1.086.162-1.086.362c0 .2.486.362 1.086.362z'
              fill='#fff'
            />
          </>
        ) : (
          <>
            <circle cx='16' cy='16' r='16' fill='#FE958C' />
            <circle cx='15.999' cy='15.999' r='12.952' fill='#FC7266' />
            <path
              d='M18.953 16.28a3.862 3.862 0 10-5.908 0l1.392 1.741a2 2 0 003.124 0l1.392-1.74zM16 12.585a1.21 1.21 0 110 2.42 1.21 1.21 0 010-2.42zM15.997 22.291c1.28 0 2.317-.346 2.317-.773 0-.426-1.037-.772-2.317-.772-1.28 0-2.317.346-2.317.773 0 .426 1.037.772 2.317.772z'
              fill='#fff'
            />
          </>
        )}
      </svg>
    </div>
  )
}

export function MapIcon3({ isMobile = false }) {
  const top = isMobile ? 196 : 'initial'
  const bottom = isMobile ? 'initial' : 91
  const left = isMobile ? '83.47%' : '83.5625%'
  const size = isMobile ? 20 : 30

  return (
    <div className={mapStyles.map} style={{ bottom, left, top }}>
      <svg
        width={size}
        height={size}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {isMobile ? (
          <>
            <circle cx='10' cy='10' r='10' fill='#7177C2' />
            <circle cx='10.002' cy='10' r='8.095' fill='#5A60A6' />
            <path
              d='M11.846 10.175a2.414 2.414 0 10-3.693 0l.285.356a2 2 0 003.124 0l.284-.356zM10 7.865a.756.756 0 110 1.513.756.756 0 010-1.513zM10 13.93c.799 0 1.447-.216 1.447-.482 0-.267-.648-.483-1.448-.483-.8 0-1.448.216-1.448.483 0 .266.648.482 1.448.482z'
              fill='#fff'
            />
          </>
        ) : (
          <>
            <circle cx='15' cy='15' r='15' fill='#97BFAB' />
            <circle cx='14.998' cy='15' r='12.143' fill='#5B9976' />
            <path
              d='M17.77 15.263a3.62 3.62 0 10-5.54 0l1.208 1.51a2 2 0 003.123 0l1.208-1.51zM15 11.797a1.135 1.135 0 110 2.27 1.135 1.135 0 010-2.27zM15 20.898c1.2 0 2.173-.325 2.173-.725 0-.4-.972-.724-2.172-.724-1.2 0-2.173.324-2.173.724 0 .4.973.725 2.173.725z'
              fill='#fff'
            />
          </>
        )}
      </svg>
    </div>
  )
}
