import React, { ReactElement } from 'react'

import productListStyles from './ProductList.module.css'

type Props = {
  isMobile?: boolean
}

type ProductIconProps = {
  name: string
  isMobile?: boolean
}

type MenuProps = {
  list: ProductMenuItem[]
}

type ProductMenuItem = {
  key: string
  title: string
  subTitle: string
  iconName: string
}

type SvgIconProps = {
  isMobile?: boolean
}

const icons: { [key: string]: (props: SvgIconProps) => ReactElement } = {
  service: ({ isMobile }) =>
    isMobile ? (
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
    ) : (
      <svg
        width='56'
        height='54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M31.58 53.992h15.505a8.932 8.932 0 006.304-2.602A8.865 8.865 0 0056 45.11V8.882c0-2.356-.94-4.615-2.611-6.28A8.932 8.932 0 0047.085 0H8.915a8.932 8.932 0 00-6.304 2.601A8.865 8.865 0 000 8.882v36.233c0 2.356.94 4.615 2.611 6.28a8.932 8.932 0 006.304 2.602h13.05c-6.544-.644-12.094-6.14-12.094-6.14a1.373 1.373 0 01-.427-1.521 1.37 1.37 0 01.29-.477l6.255-6.698a1.378 1.378 0 011.806-.183c1.114.794 2.911 2.035 3.797 2.498 3.126 1.644 5.62 2.207 8.277 1.374.479-.164.9-.46 1.218-.852.655-.782.454-1.832-.376-2.698a3.728 3.728 0 00-1.237-.832 18.464 18.464 0 00-3.182-.994l-5.246-1.196a22.679 22.679 0 01-5.436-1.999c-.175-.094-.348-.189-.518-.277-2.825-1.666-4.653-4.566-5.293-7.772a13.789 13.789 0 01.022-5.552 13.626 13.626 0 013.6-6.825 13.968 13.968 0 011.922-1.618 17.98 17.98 0 015.895-2.648 27.747 27.747 0 0110.916-.53c3.72.51 7.248 1.948 10.258 4.183.181.136.351.277.513.397a1.945 1.945 0 01.723 1.407 1.936 1.936 0 01-.567 1.477l-6.324 6.23a1.937 1.937 0 01-2.694.029c-1.928-1.832-6.174-5.021-9.133-2.22-1.168 1.11-.616 2.464-.374 2.875.327.463.775.828 1.296 1.055.905.446 1.858.63 3.212.935 3.7.585 7.299 1.694 10.685 3.292l.053.03c3.388 1.916 5.51 5.438 5.931 9.296.294 2.689-.233 5.372-1.58 8.05-.16.317-.346.622-.557.91a16.446 16.446 0 01-4.477 4.313c-4.775 2.973-7.539 2.676-7.539 2.676z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-6.685'
            y1='-3.444'
            x2='101.562'
            y2='93.506'
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
  forms: ({ isMobile }) =>
    isMobile ? (
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
    ) : (
      <svg
        width='56'
        height='54'
        viewBox='0 0 56 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M47.0846 0H8.91542C6.55091 0 4.28323 0.935928 2.61127 2.60189C0.939301 4.26785 0 6.52738 0 8.8834L0 45.1166C0 47.4726 0.939301 49.7321 2.61127 51.3981C4.28323 53.0641 6.55091 54 8.91542 54H12.3033V11.6123C12.3033 10.999 12.5478 10.4108 12.983 9.97712C13.4183 9.54345 14.0086 9.29981 14.6241 9.29981H42.2062C42.8217 9.29981 43.412 9.54345 43.8472 9.97712C44.2825 10.4108 44.527 10.999 44.527 11.6123V17.9084C44.527 18.5217 44.2825 19.1099 43.8472 19.5435C43.412 19.9772 42.8217 20.2208 42.2062 20.2208H25.161C24.8654 20.2208 24.582 20.3378 24.373 20.5461C24.164 20.7543 24.0466 21.0368 24.0466 21.3313V26.6058C24.0466 26.9003 24.164 27.1827 24.373 27.391C24.582 27.5992 24.8654 27.7162 25.161 27.7162H40.6571C40.9621 27.7159 41.2642 27.7754 41.5461 27.8915C41.828 28.0075 42.0842 28.1778 42.3 28.3925C42.5158 28.6073 42.687 28.8624 42.8038 29.1431C42.9206 29.4238 42.9807 29.7248 42.9807 30.0287V36.322C42.9807 36.6259 42.9206 36.9269 42.8038 37.2076C42.687 37.4883 42.5158 37.7434 42.3 37.9582C42.0842 38.1729 41.828 38.3432 41.5461 38.4593C41.2642 38.5753 40.9621 38.6348 40.6571 38.6345H25.161C25.0135 38.6345 24.8674 38.6636 24.7313 38.7203C24.5952 38.777 24.4717 38.86 24.368 38.9646C24.2643 39.0692 24.1825 39.1933 24.1274 39.3296C24.0722 39.4659 24.0447 39.6118 24.0466 39.7588V53.9944H47.0846C49.4491 53.9944 51.7168 53.0585 53.3887 51.3926C55.0607 49.7266 56 47.4671 56 45.111V8.8834C56 6.52738 55.0607 4.26785 53.3887 2.60189C51.7168 0.935928 49.4491 0 47.0846 0V0Z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-6.68522'
            y1='-3.44408'
            x2='101.562'
            y2='93.5058'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.19' stopColor='#465FEE' />
            <stop offset='0.31' stopColor='#414FD9' />
            <stop offset='0.57' stopColor='#3834B5' />
            <stop offset='0.7' stopColor='#3429A7' />
          </linearGradient>
        </defs>
      </svg>
    ),
}

export const products: ProductMenuItem[] = [
  {
    key: 'services',
    title: 'Remodzy Services',
    subTitle: 'Project tracking',
    iconName: 'service',
  },
  {
    key: 'forms',
    title: 'Remodzy Forms',
    subTitle: 'Forms builder',
    iconName: 'forms',
  },
]

const ProductIcon: React.FC<ProductIconProps> = ({ name, ...props }) => {
  const Icon = icons[name]
  return <Icon {...props} />
}

const MobileProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, iconName }) => (
      <div key={key} className={productListStyles.item}>
        <ProductIcon name={iconName} isMobile />
        <div className={productListStyles.mainBlock}>
          <span className={productListStyles.title}>{title}</span>
          <span className={productListStyles.subTitle}>{subTitle}</span>
        </div>
      </div>
    ))}
  </>
)

const DesktopProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, iconName }) => (
      <div key={key} className={productListStyles.item}>
        <ProductIcon name={iconName} />
        <div className={productListStyles.mainBlock}>
          <span className={productListStyles.title}>{title}</span>
          <span className={productListStyles.subTitle}>{subTitle}</span>
        </div>
      </div>
    ))}
  </>
)

const ProductListMenu: React.FC<Props> = ({ isMobile = false }) =>
  isMobile ? (
    <MobileProductListMenuItems list={products} />
  ) : (
    <DesktopProductListMenuItems list={products} />
  )

export default ProductListMenu
