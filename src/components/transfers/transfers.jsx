/* eslint-disable react/function-component-definition */

import { useDispatch, useSelector } from 'react-redux'

import { resetMoreTicket } from '../../store/ticketsSlice'
import { toggleAll, toggleSingle } from '../../store/filter-slice'

import styles from './transfers.module.scss'

const Trasfers = () => {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={!filters.some((filter) => !filter.isChecked)}
            onChange={() => {
              dispatch(toggleAll())
              dispatch(resetMoreTicket())
            }}
            id="all"
          />
          <label htmlFor="all">
            <span>Все</span>
          </label>
        </li>
        {filters.map((filter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={styles.item} key={index}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id={filter.stopCount}
              checked={filter.isChecked}
              onChange={() => {
                dispatch(toggleSingle({ stopCount: filter.stopCount }))
                dispatch(resetMoreTicket())
              }}
            />
            <label htmlFor={filter.stopCount}>
              <span>{filter.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Trasfers
