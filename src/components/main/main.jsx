import React from 'react'

import Tabs from '../tabs'
import TicketList from '../ticket-list'

import styles from './main.module.scss'

function Main() {
  return (
    <div className={styles.main}>
      <Tabs />
      <TicketList />
    </div>
  )
}

export default Main
