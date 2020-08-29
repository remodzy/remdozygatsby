import React, { ReactElement } from 'react'

import Button from '~components/button'
import DotsArtifact from '~components/dot'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import BlockWrapper from '~components/blockWrapper'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import GlassesImage from './glassesImage'
import integrationsStyles from './Integrations.module.css'

export default function Integrations(): ReactElement<any, any> {
  return (
    <div className={integrationsStyles.root}>
      <BlockWrapper>
        <div className={integrationsStyles.wrapper}>
          <SectionLabel text='INTEGRATIONS' />
          <SectionTitle text='Google Glass Remote Advisor' />
          <div className={integrationsStyles.subTitle}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <GlassesImage />
          <Button
            className='primary-btn'
            label='Learn More'
            handleClick={() => {}}
          />
          <DotsArtifact
            top={206}
            left={148}
            columns={4}
            size={6.32}
            gap={30.12}
            // prettier-ignore
            list={[
              1,0,0,0,
              0,0,0,1,
              0,0,0,1,
              0,1,0,0,
              0,0,0,0,
              0,0,0,0,
              0,1,1,0,
              0,0,0,0,
            ]}
          />
          <DotsArtifact
            bottom={80}
            right={173}
            columns={8}
            zIndex={1}
            size={6.32}
            gap={30.12}
            // prettier-ignore
            list={[
              0,0,0,0,0,0,0,1,
              0,1,0,0,1,0,0,0,
              0,1,0,0,0,0,0,0,
              0,0,0,0,0,1,1,0,
            ]}
          />
          <CircleArtifact
            name={CircleName.Green}
            mainSize={54}
            centerSize={11}
            left='15%'
            top={592}
          />
          <CircleArtifact
            name={CircleName.Violet}
            mainSize={38}
            centerSize={8}
            left='86.4375%'
            top={92}
          />
        </div>
      </BlockWrapper>
      <div className={integrationsStyles.backgroundCover}></div>
    </div>
  )
}
