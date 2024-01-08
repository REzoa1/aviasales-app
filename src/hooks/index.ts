import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../store'
import { getTicketsPart, selectTickets } from '../store/slices/tickets'
import { getFilteredAndSortedTickets } from '../utils/helpers'
import { selectSort } from '../store/slices/sort'
import { selectFilter } from '../store/slices/filter'

const useDispatchTickets = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(selectTickets)
  const { tickets, stop } = state

  useEffect(() => {
    if (!stop) {
      dispatch(getTicketsPart())
    }
  }, [dispatch, stop, tickets])

  return state
}

const useTickets = () => {
  const { filters } = useAppSelector(selectFilter)
  const { tickets } = useAppSelector(selectTickets)
  const { tabName } = useAppSelector(selectSort)

  return getFilteredAndSortedTickets(tickets, tabName, filters)
}

export { useDispatchTickets, useTickets }
