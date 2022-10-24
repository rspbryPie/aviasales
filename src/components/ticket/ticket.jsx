import React from 'react'

import enumeration from '../../logic/enumerate'
import { getArrivalTime, getDepartureTime, getTravelTime } from '../../logic/time-service'

import styles from './ticket.module.scss'

function Ticket({ price, carrier, segments }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.price_logo}>
        <div className={styles.price}> {`${price} \u20bd`} </div>
        <img className={styles.logo} alt="logo перевозчика" src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((item) => (
        <div className={styles.information} key={item.date}>
          <div className={`${styles.text} ${styles.gray_text}`}>
            {item.origin}-{item.destination}
          </div>
          <div className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</div>
          <div className={`${styles.text} ${styles.gray_text}`}>
            {item.stops.length} {enumeration(item.stops.length)}
          </div>
          <div className={styles.text}>
            {getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}
          </div>
          <div className={styles.text}> {getTravelTime(item.duration)}</div>
          <div className={styles.text}> {item.stops.join(', ')}</div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
