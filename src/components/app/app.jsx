import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../../store/ticketsSlice'
import deleteCookie from '../../logic/delete-cookie'
import Header from '../header'
import Sidebar from '../sidebar'
import Main from '../main'

import styles from './app.module.scss'

function App() {
  const tickets = useSelector((state) => state.tickets.tickets)
  const fetchStatus500 = useSelector((state) => state.tickets.fetchStatus500)
  const stopFetch = useSelector((state) => state.tickets.stopFetch)
  const searchId = useSelector((state) => state.tickets.searchId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSearchId())
    return deleteCookie('searchId')
  }, [dispatch])

  useEffect(() => {
    if (!stopFetch && searchId) dispatch(fetchTickets())
  }, [dispatch, tickets, fetchStatus500, stopFetch, searchId])

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
