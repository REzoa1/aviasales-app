import { createSlice } from '@reduxjs/toolkit'

import { TRANSFERS_INITIAL } from '../../utils/constants'
import { TransferType } from '../../models'

type StateType = {
  filter: FilterState
}

type FilterState = {
  transfers: TransferType[]
}

const initialState: FilterState = {
  transfers: TRANSFERS_INITIAL,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterData: (state, action) => {
      const filterName = action.payload

      if (filterName === 'All') {
        const isChecked = state.transfers.find((item) => item.id === 'All')?.checked
        const allSelected = state.transfers.map((item) => ({ ...item, checked: !isChecked }))

        state.transfers = allSelected
      } else {
        const currSelected = state.transfers.map((item) =>
          item.id !== filterName && item.id !== 'All'
            ? item
            : { ...item, checked: item.id === 'All' ? false : !item.checked }
        )

        const countOfChecked = currSelected.filter(({ checked }) => checked).length
        const isAllSelected = countOfChecked === state.transfers.length - 1
        const allSelected = currSelected.map((item) => (item.id === 'All' ? { ...item, checked: true } : item))

        state.transfers = isAllSelected ? allSelected : currSelected
      }
    },
  },
})

export const { filterData } = filterSlice.actions

export const selectData = (state: StateType) => state.filter
export default filterSlice.reducer
