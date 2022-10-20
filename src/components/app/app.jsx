import React from 'react'

import Header from '../header'
import Sidebar from '../sidebar'
import Main from '../main'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
