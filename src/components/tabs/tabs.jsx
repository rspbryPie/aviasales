import React from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal } from '../../store/ticketsSlice'

import styles from './tabs.module.scss'

function Tabs() {
  const dispatch = useDispatch()
  return (
    <div className={styles.tabs}>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketByPrice())}>
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketByDuration())}>
        <span>САМЫЙ БЫСТРЫЙ</span>
      </div>
      <div role="presentation" className={styles.tab} onClick={() => dispatch(sortTicketOptimal())}>
        <span>ОПТИМАЛЬНЫЙ</span>
      </div>
    </div>
  )
}

export default Tabs
