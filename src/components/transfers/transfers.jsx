import React from 'react';

import styles from './transfers.module.scss';

const Trasfers = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          id='all'
          name='All'
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor='all'>
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          id='No_transfer'
          name='Zero'
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor='No_transfer'>
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          id='One_transfer'
          name='One'
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor='One_transfer'>
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          id='Two_transfer'
          name='Two'
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor='Two_transfer'>
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type='checkbox'
          id='Three_transfer'
          name='Three'
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor='Three_transfer'>
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Trasfers;
