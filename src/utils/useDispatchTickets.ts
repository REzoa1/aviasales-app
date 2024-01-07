import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../store'
import { getTicketsPart, selectTickets } from '../store/slices/tickets'

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

export default useDispatchTickets
