import React from 'react';
import Ticket from './../ticket';

import styles from './ticket-list.module.scss';

const TicketList = () => {
  return (
    <div className={styles.ticket_list}>
      <Ticket />

      <button type='button' className={styles.button}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
};
export default TicketList;
