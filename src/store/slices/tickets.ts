import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { TicketType } from '../../types'
import { fetchSearchId, fetchTickets } from '../../utils/fetch-helpers'

type StateType = {
  ticketsState: TicketsStateType
}

type TicketsStateType = {
  searchId: string
  tickets: TicketType[]

  progress: number
  stop: boolean
  status: 'idle' | 'loading' | 'failed' | 'success'
}

const initialState: TicketsStateType = {
  searchId: '',
  tickets: [],

  progress: 0,
  stop: false,
  status: 'idle',
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
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTicketsPart.pending, (state) => {
      state.status = 'loading'

      const progress = Math.floor((state.tickets.length / 7229) * 100)
      state.progress = progress
    })
    builder.addCase(getTicketsPart.fulfilled, (state, action) => {
      state.status = 'success'

      const { tickets, stop } = action.payload
      if (tickets) {
        state.tickets = [...state.tickets, ...tickets]
        state.stop = stop
      }
    })
    builder.addCase(getTicketsPart.rejected, (state) => {
      state.status = 'failed'
    })

    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload
    })
  },
})

export const selectTickets = (state: StateType) => state.ticketsState
export default ticketsSlice.reducer
