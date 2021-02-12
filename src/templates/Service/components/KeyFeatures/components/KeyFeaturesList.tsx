import React, { ReactElement } from 'react'

import GridRow from '~components/GridRow'
import InfoBlock from '~components/InfoBlock'
import RoxContainer from '~components/RoxContainer'
import { useDeviceDetect } from '~utils/hooks'

import styles from './KeyFeaturesList.module.css'
import { getConfigList, ListItem } from './listConfig'

export default function KeyFeaturesList(): ReactElement {
  const { isMobile } = useDeviceDetect()
  const list: ListItem[] = getConfigList()

  return (
    <div key='service-list' className={styles.root}>
      <RoxContainer>
        {list.map(({ key, colors, link, title, text, icon: Icon, images }) => (
          <GridRow key={key}>
            <InfoBlock
              colors={colors}
              link={link}
              title={title}
              text={text}
              icon={Icon}
            />

            <img src={isMobile ? images.mobile : images.desktop} alt='' />
          </GridRow>
        ))}
      </RoxContainer>
    </div>
  )
}
