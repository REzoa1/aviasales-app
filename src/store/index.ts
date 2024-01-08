import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import ticketsReducer from './slices/tickets'
import sortReducer from './slices/sort'
import filterReducer from './slices/filter'

export const store = configureStore({
  reducer: {
    ticketsState: ticketsReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
