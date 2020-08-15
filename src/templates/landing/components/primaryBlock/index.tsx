import React from 'react'
import { getTextColor } from '../../../../utils/colors'
import Button from '../../../../components/button'
import Label from '../../../../components/Label'
import CompaniesLogos from '../companiesLogos'
import PrimaryImage from './primaryImage'

const textColor = getTextColor()

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginTop: 95,
    marginBottom: 150,
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

export default function PrimaryBlock() {
  return (
    <div style={styles.root}>
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
    </div>
  )
}
