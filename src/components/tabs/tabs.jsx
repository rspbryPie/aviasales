import React from 'react'

import styles from './tabs.module.scss'

function Tabs() {
  return (
    <div className={styles.tabs}>
      <div role="presentation" className={styles.tab}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </div>
    </div>
  )
}

export default Tabs
