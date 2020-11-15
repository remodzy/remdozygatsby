import React from 'react'

import styles from './Sidebar.module.css'

export default function SideBar() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Remodzy<span className={styles.titleHighlighted}>API</span>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}
