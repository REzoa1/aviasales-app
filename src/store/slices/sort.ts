import { createSlice } from '@reduxjs/toolkit'

type StateType = {
  sort: SortState
}

type SortState = {
  tabName: string
}

const initialState: SortState = {
  tabName: 'Оптимальный',
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortTickets: (state, action) => {
      const tabName = action.payload
      state.tabName = tabName
    },
  },
})

export const { sortTickets } = sortSlice.actions

export const selectSort = (state: StateType) => state.sort
export default sortSlice.reducer
