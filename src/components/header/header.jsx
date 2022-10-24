import React from 'react'

import logo from './Logo.png'
import styles from './header.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="logo" src={logo} />
    </div>
  )
}

export default Header
