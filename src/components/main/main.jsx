import React from 'react'
import { Alert, Spin } from 'antd'
import { useSelector } from 'react-redux'

import Tabs from '../tabs'
import TicketList from '../ticket-list'

import 'antd/dist/antd.min.css'
import styles from './main.module.scss'

function Main() {
  const isLoading = useSelector((state) => state.tickets.isLoading)
  const error = useSelector((state) => state.tickets.error)
  return (
    <div className={styles.main}>
      <Tabs />
      {isLoading && <Spin tip="Loading..." />}
      {error && <Alert message="Упссс" description="Произошел сбой при получении билетов" type="info" />}
      {!error && <TicketList />}
    </div>
  )
}

export default Main
