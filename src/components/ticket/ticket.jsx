import React from 'react'

import styles from './ticket.module.scss'

function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.price_logo}>
        <div className={styles.price}> цена </div>
        <img
          className={styles.logo}
          alt="logo перевозчика"
          src="https://e7.pngegg.com/pngimages/237/389/png-clipart-air-conditioning-logo-carrier-corporation-frigidaire-frs123lw1-home-appliance-others-text-room.png"
        />
      </div>

      <div className={styles.information}>
        <div className={`${styles.text} ${styles.gray_text}`}>откуда-куда</div>
        <div className={`${styles.text} ${styles.gray_text}`}>В ПУТИ</div>
        <div className={`${styles.text} ${styles.gray_text}`}>кол-во пересадок</div>
        <div className={styles.text}>что-то - куда-то</div>
        <div className={styles.text}> время в пути</div>
        <div className={styles.text}> где пересадки</div>
      </div>
    </div>
  )
}

export default Ticket
