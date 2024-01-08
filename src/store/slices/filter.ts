import { createSlice } from '@reduxjs/toolkit'

import { FILTERS_INITIAL } from '../../utils/constants'
import { FilterType } from '../../types'
import { updateFilters } from '../../utils/helpers'

type StateType = {
  filter: FilterState
}

type FilterState = {
  filters: FilterType[]
}

const initialState: FilterState = {
  filters: FILTERS_INITIAL,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTickets: (state, action) => {
      const filterName = action.payload
      const newFilters = updateFilters(state.filters, filterName)

      state.filters = newFilters
    },
  },
})

export const { filterTickets } = filterSlice.actions

export const selectFilter = (state: StateType) => state.filter
export default filterSlice.reducer
