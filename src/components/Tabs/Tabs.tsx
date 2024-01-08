import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store'
import { selectTickets } from '../../store/slices/tickets'
import { selectSort, sortTickets } from '../../store/slices/sort'
import { TABS } from '../../utils/constants'

import s from './Tabs.module.scss'

type Props = {
  setTicketsCount: (count: number) => void
}

function Tabs({ setTicketsCount }: Props) {
  const dispatch = useAppDispatch()
  const { tickets } = useAppSelector(selectTickets)
  const { tabName } = useAppSelector(selectSort)

  const tabs = TABS.map((tab) => {
    const isActiveTab = tabName === tab

    const onTabClick = () => {
      setTicketsCount(5)
      dispatch(sortTickets(tab))
    }

    return (
      <button
        disabled={!tickets.length}
        type="button"
        key={tab}
        className={`${s.tabs__item} ${isActiveTab && s['tabs__item--active']}`}
        onClick={onTabClick}
      >
        {tab}
      </button>
    )
  })

  return <div className={s.tabs}>{tabs}</div>
}

export default Tabs
