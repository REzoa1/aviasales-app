import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { TicketType, FilterType } from '../../types'
import { FILTERS_INITIAL } from '../../utils/constants'
import { fetchSearchId, fetchTickets } from '../../utils/fetch-helpers'
import { updateFilters } from '../../utils/helpers'

type StateType = {
  ticketsState: TicketsStateType
}

type TicketsStateType = {
  searchId: string
  tickets: TicketType[]

  progress: number
  stop: boolean

  filters: FilterType[]
  tabName: string
}

const initialState: TicketsStateType = {
  searchId: '',
  tickets: [],

  progress: 0,
  stop: false,

  filters: FILTERS_INITIAL,
  tabName: 'Оптимальный',
}

export const getSearchId = createAsyncThunk('tickets/getSearchId', async () => {
  const res = await fetchSearchId()
  return res
})

export const getTicketsPart = createAsyncThunk('tickets/getTicketsPart', async (data, { getState, dispatch }) => {
  const { ticketsState } = getState() as StateType
  const { searchId } = ticketsState
  const currSearchId = searchId || (await (await dispatch(getSearchId())).payload)

  const res = await fetchTickets(currSearchId)

  return res.tickets ? res : { tickets: [], stop: false }
})

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    filterTickets: (state, action) => {
      const filterName = action.payload
      const newFilters = updateFilters(state.filters, filterName)

      state.filters = newFilters
    },

    sortTickets: (state, action) => {
      const tabName = action.payload
      state.tabName = tabName
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTicketsPart.pending, (state) => {
      const progress = Math.floor((state.tickets.length / 7229) * 100)
      state.progress = progress
    })
    builder.addCase(getTicketsPart.fulfilled, (state, action) => {
      const { tickets, stop } = action.payload

      if (tickets) {
        state.tickets = [...state.tickets, ...tickets]
        state.stop = stop
      }
    })

    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload
    })
  },
})

export const { filterTickets, sortTickets } = ticketsSlice.actions

export const selectTickets = (state: StateType) => state.ticketsState
export default ticketsSlice.reducer
