import React from 'react'

import productListStyles from './ProductList.module.css'

const list = [
  {
    key: 'services',
    title: 'Remodzy Services',
    subTitle: 'Project tracking',
    Icon: () => (
      <svg
        width='44'
        height='42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24.813 41.994h12.182c1.858 0 3.64-.728 4.953-2.024A6.86 6.86 0 0044 35.085V6.908a6.86 6.86 0 00-2.052-4.885A7.055 7.055 0 0036.995 0H7.005c-1.858 0-3.64.728-4.953 2.023A6.86 6.86 0 000 6.908V35.09a6.86 6.86 0 002.052 4.884 7.055 7.055 0 004.953 2.024h10.254c-5.143-.5-9.503-4.775-9.503-4.775a1.07 1.07 0 01-.396-.755 1.053 1.053 0 01.289-.8l4.914-5.209a1.093 1.093 0 011.418-.142c.876.617 2.288 1.582 2.984 1.942 2.456 1.278 4.416 1.717 6.504 1.069.376-.128.707-.357.956-.663.515-.608.357-1.424-.295-2.098a2.932 2.932 0 00-.972-.648 14.617 14.617 0 00-2.5-.773l-4.122-.93a17.93 17.93 0 01-4.27-1.554c-.139-.074-.274-.147-.408-.216-2.22-1.296-3.656-3.552-4.16-6.045a10.619 10.619 0 01.018-4.318c.406-2 1.388-3.844 2.829-5.308.464-.464.97-.885 1.51-1.259a14.198 14.198 0 014.632-2.06 22.018 22.018 0 018.577-.412 17.606 17.606 0 018.06 3.254c.142.105.276.216.403.308a1.517 1.517 0 01.568 1.095 1.493 1.493 0 01-.446 1.148l-4.969 4.847a1.53 1.53 0 01-2.117.022c-1.514-1.425-4.85-3.906-7.175-1.727-.918.863-.484 1.916-.294 2.236.257.36.61.644 1.018.82.712.348 1.46.49 2.524.728a31.267 31.267 0 018.395 2.56l.042.024c2.662 1.49 4.33 4.23 4.66 7.23.23 2.091-.183 4.178-1.24 6.26a5.015 5.015 0 01-.439.709 12.864 12.864 0 01-3.517 3.355c-3.752 2.312-5.924 2.08-5.924 2.08z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-5.253'
            y1='-2.679'
            x2='79.029'
            y2='73.577'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.19' stopColor='#465FEE' />
            <stop offset='.31' stopColor='#414FD9' />
            <stop offset='.57' stopColor='#3834B5' />
            <stop offset='.7' stopColor='#3429A7' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    key: 'forms',
    title: 'Remodzy Forms',
    subTitle: 'Forms builder',
    Icon: () => (
      <svg
        width='44'
        height='42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.995 0H7.005c-1.858 0-3.64.728-4.953 2.024A6.862 6.862 0 000 6.909v28.182c0 1.832.738 3.59 2.052 4.885A7.054 7.054 0 007.005 42h2.662V9.032c0-.477.192-.935.534-1.272a1.836 1.836 0 011.29-.527h21.671c.484 0 .947.19 1.29.527.341.337.534.795.534 1.272v4.897c0 .477-.193.934-.535 1.271a1.836 1.836 0 01-1.289.527H19.769a.882.882 0 00-.619.253.858.858 0 00-.256.611v4.102c0 .23.092.45.256.611a.882.882 0 00.62.253h12.175a1.845 1.845 0 011.29.526 1.796 1.796 0 01.535 1.273v4.894a1.776 1.776 0 01-.534 1.273 1.826 1.826 0 01-1.291.526H19.769a.886.886 0 00-.623.257.863.863 0 00-.252.617v11.073h18.101c1.858 0 3.64-.728 4.953-2.024A6.862 6.862 0 0044 35.086V6.91c0-1.832-.738-3.59-2.052-4.885A7.054 7.054 0 0036.995 0z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-5.253'
            y1='-2.679'
            x2='79.029'
            y2='73.577'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.19' stopColor='#465FEE' />
            <stop offset='.31' stopColor='#414FD9' />
            <stop offset='.57' stopColor='#3834B5' />
            <stop offset='.7' stopColor='#3429A7' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

export default function ProductList() {
  return (
    <>
      {list.map(item => (
        <div key={item.key} className={productListStyles.item}>
          <item.Icon />
          <div className={productListStyles.mainBlock}>
            <span className={productListStyles.title}>{item.title}</span>
            <span className={productListStyles.subTitle}>{item.subTitle}</span>
          </div>
        </div>
      ))}
    </>
  )
}
