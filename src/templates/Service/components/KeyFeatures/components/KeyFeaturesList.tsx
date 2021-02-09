import React, { ReactElement } from 'react'

import { getConfigList, ListItem } from './listConfig'
import serviceListStyles from './KeyFeaturesList.module.css'
import GridRow from '~components/GridRow'
import InfoBlock from '~components/InfoBlock'
import { useDeviceDetect } from '~utils/hooks'

export default function KeyFeaturesList(): ReactElement {
  const { isMobile } = useDeviceDetect()
  const list: ListItem[] = getConfigList()

  return (
    <div key='service-list' className={serviceListStyles.root}>
      {list.map(({ key, colors, link, title, text, icon, images }) => (
        <GridRow key={key}>
          <InfoBlock
            colors={colors}
            link={link}
            title={title}
            text={text}
            icon={icon}
          />
          <div>
            <img src={isMobile ? images.mobile : images.desktop} alt='' />
          </div>
        </GridRow>
      ))}
    </div>
  )
}
