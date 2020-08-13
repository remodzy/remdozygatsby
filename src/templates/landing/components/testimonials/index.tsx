import React from 'react'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'

const styles = {
  root: {
    paddingTop: 136,
  },
}

export default function Testimonials() {
  return (
    <div style={styles.root}>
      <SectionLabel text='testimonials' color='success' />
      <SectionTitle text='What People Say' />
    </div>
  )
}
