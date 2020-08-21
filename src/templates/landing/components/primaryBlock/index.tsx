import React, { ReactElement } from 'react'
import { getTextColor } from '../../../../utils/colors'
import Button from '../../../../components/button'
import Label from '../../../../components/Label'
import CompaniesLogos from '../companiesLogos'
import PrimaryImage from './primaryImage'
import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'
import DotsArtifact from '../../../../components/dot'

const textColor = getTextColor()

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginTop: 95,
    marginBottom: 112,
    position: 'relative' as const,
  },
  primaryLabel: {
    color: textColor.main,
    fontSize: 54,
    lineHeight: '63px',
    fontWeight: 600,
    padding: '0 150px',
    textAlign: 'center' as const,
    textTransform: 'capitalize' as const,
    marginBottom: 22,
    maxWidth: 600,
  },
  secondaryLabel: {
    color: textColor.sub,
    fontSize: 17,
    fontWeight: 500,
    textAlign: 'center' as const,
    padding: '0 60px',
    lineHeight: '182.3%',
    marginBottom: 45,
    maxWidth: 800,
  },
  buttonContainer: {
    textAlign: 'center' as const,
  },
  labelContainer: {
    marginTop: 10,
  },
}

export default function PrimaryBlock(): ReactElement<any, any> {
  return (
    <div style={styles.root}>
      <DotsArtifact
        columns={3}
        left={17}
        top={234}
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
      <DotsArtifact
        columns={8}
        right={256}
        top={344}
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
      <div style={styles.primaryLabel}>Field service management software</div>
      <div style={styles.secondaryLabel}>
        With Remodzy Services from Remodzy, you can schedule and manage jobs,
        dispatch them to field technicians, and provide ETAs to customers with
        notifications.
      </div>
      <div style={styles.buttonContainer}>
        <Button
          label='Start Free Trial'
          className='primary-btn'
          handleClick={() => {}}
        />
        <div style={styles.labelContainer}>
          <Label text='No credit card required' />
        </div>
      </div>

      <PrimaryImage />
      <CompaniesLogos />
      <div
        style={{
          position: 'absolute',
          zIndex: -1,
          width: 1600,
          height: 818,
          background:
            'linear-gradient(180deg, rgba(246, 249, 251, 0) 0%, #F5F8FB 100%)',
        }}
      ></div>
    </div>
  )
}
