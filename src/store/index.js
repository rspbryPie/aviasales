import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filter-slice'
import ticketReducer from './ticketsSlice'

export default configureStore({
  reducer: {
    filters: filterReducer,
    tickets: ticketReducer,
  },
})
