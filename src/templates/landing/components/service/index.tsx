import React from 'react'
import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import ServiceList from './components/serviceList'

const styles = {
  root: {},
}

export default function Service() {
  return (
    <div style={styles.root}>
      <SectionLabel text="SERVICE" />
      <SectionTitle text="Remodzy Service" />
      <ServiceList />
    </div>
  )
}
