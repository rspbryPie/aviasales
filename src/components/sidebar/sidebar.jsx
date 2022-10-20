import React from 'react'

import Transfers from '../transfers'

import styles from './sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Transfers />
    </div>
  )
}

export default Sidebar
