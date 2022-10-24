import React from 'react'
import { Alert } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { showMoreTicket } from '../../store/ticketsSlice'
import filterTicketByTransfer from '../../logic/filter-ticket-transfer'
import uniKey from '../../logic/uni-key'
import Ticket from '../ticket'

import 'antd/dist/antd.min.css'
import styles from './ticket-list.module.scss'

function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets)
  const numShowTicket = useSelector((state) => state.tickets.numShowTicket)
  const error = useSelector((state) => state.tickets.error)
  const isLoading = useSelector((state) => state.tickets.isLoading)
  const transfers = useSelector((state) => state.filters)

  const dispatch = useDispatch()

  const ticketsFilter = filterTicketByTransfer(tickets, transfers)
  console.log('ticketsFilter', ticketsFilter)
  console.log('numShowTicket', numShowTicket)
  return (
    <div className={styles.ticket_list}>
      {ticketsFilter.slice(0, numShowTicket).map((ticket) => (
        <Ticket key={uniKey()} {...ticket} />
      ))}
      {ticketsFilter.length === 0 && !error && !isLoading && (
        <Alert message="Упссс" description="Произошел сбой при получении билетов" type="info" />
      )}
      {ticketsFilter.length > numShowTicket && (
        <button type="button" className={styles.button} onClick={() => dispatch(showMoreTicket())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  )
}
export default TicketList
