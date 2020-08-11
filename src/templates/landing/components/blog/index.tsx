import React from 'react'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import ResourceItem from './resourceItem'
import Button from '../../../../components/button'

const styles = {
  root: {},
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left' as const,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 100,
  },
}

export default function Blog() {
  return (
    <div style={styles.root}>
      <SectionLabel text='BLOG' color='success' />
      <SectionTitle text='Useful Resources' />
      <div style={styles.list}>
        <ResourceItem
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
        <ResourceItem
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
        <ResourceItem
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
      </div>

      <div style={styles.buttonContainer}>
        <Button
          className='primary-btn'
          label='Learn More'
          handleClick={() => {}}
        />
      </div>
    </div>
  )
}
