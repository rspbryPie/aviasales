import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: [
    { stopCount: 0, text: 'Без пересадок', isChecked: true },
    { stopCount: 1, text: '1 пересадка', isChecked: true },
    { stopCount: 2, text: '2 пересадки', isChecked: true },
    { stopCount: 3, text: '3 пересадки', isChecked: true },
  ],
  reducers: {
    toggleAll(filters) {
      const isAllChecked = filters.every((filter) => filter.isChecked)
      filters.forEach((filter) => {
        // eslint-disable-next-line no-param-reassign
        filter.isChecked = !isAllChecked
      })
    },
    toggleSingle(state, action) {
      const filter = state.find((fil) => fil.stopCount === action.payload.stopCount)
      filter.isChecked = !filter.isChecked
    },
  },
})

export const { toggleAll, toggleSingle } = filterSlice.actions

export default filterSlice.reducer
