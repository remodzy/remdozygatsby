import React, { ReactElement } from 'react'

import { getTextColor } from '~utils/colors'
import Button from '~components/button'
import Label from '~components/Label'
import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import BlockWrapper from '~components/blockWrapper'
import CompaniesLogos from '../companiesLogos'
import PrimaryImage from './primaryImage'
import primaryBlockStyles from './PrimaryBlock.module.css'

export default function PrimaryBlock(): ReactElement<any, any> {
  return (
    <div className={primaryBlockStyles.root}>
      <BlockWrapper
        styleWrapper={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DotsArtifact
          columns={8}
          right={256}
          top={344}
          size={5.78}
          gap={27.56}
          // prettier-ignore
          list={[
              0,1,1,0,0,0,0,0,
              0,0,0,0,0,0,1,0,
              0,0,0,0,0,0,1,0,
              0,0,0,0,0,0,0,0,
            ]}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={64}
          centerSize={12}
          left='13.6875%'
          top={30}
        />
        <CircleArtifact
          name={CircleName.Blue}
          mainSize={40}
          centerSize={12}
          left='82.6875%'
          top={238}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={62}
          centerSize={12}
          left='92.5625%'
          top={611}
        />
        <div className={primaryBlockStyles.primaryLabel}>
          Field service management software
        </div>
        <div className={primaryBlockStyles.secondaryLabel}>
          With Remodzy Services from Remodzy, you can schedule and manage jobs,
          dispatch them to field technicians, and provide ETAs to customers with
          notifications.
        </div>
        <div className={primaryBlockStyles.buttonContainer}>
          <Button
            label='Start Free Trial'
            className='primary-btn'
            handleClick={() => {}}
          />
          <div className={primaryBlockStyles.labelContainer}>
            <Label text='No credit card required' />
          </div>
        </div>

        <PrimaryImage />
        <CompaniesLogos />
      </BlockWrapper>

      <DotsArtifact
        columns={3}
        left={17}
        top={234}
        size={5.78}
        gap={27.56}
        zIndex={0}
        // prettier-ignore
        list={[
          0,0,0,
          1,1,0,
          0,0,0,
          0,0,0,
          0,1,0,
          0,0,0,
          0,0,0,
          0,0,1,
        ]}
      />

      <div className={primaryBlockStyles.backgroundCover}></div>
    </div>
  )
}
