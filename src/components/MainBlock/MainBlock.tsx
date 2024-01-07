import React, { useState } from 'react'

import Ticket from '../Ticket/Ticket'
import Alert from '../Alert/Alert'
import { TABS } from '../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../store'
import { selectTickets, sortTickets } from '../../store/slices/tickets'
import { getFilteredAndSortedTickets } from '../../utils/helpers'

import s from './MainBlock.module.scss'

function MainBlock() {
  const dispatch = useAppDispatch()
  const { tickets, filters, tabName } = useAppSelector(selectTickets)

  const [ticketsCount, setTicketsCount] = useState(5)
  const [currTab, setCurrTab] = useState(tabName)

  const initialTickets = getFilteredAndSortedTickets(tickets, tabName, filters).slice(0, ticketsCount)

  const tabs = TABS.map((tab) => {
    const isActiveTab = currTab === tab

    const onTabClick = () => {
      setTicketsCount(5)
      dispatch(sortTickets(tab))
      setCurrTab(tab)
    }

    return (
      <button
        disabled={!tickets.length}
        type="button"
        key={tab}
        className={`${s.tabs__item} ${isActiveTab && s.active}`}
        onClick={onTabClick}
      >
        {tab}
      </button>
    )
  })

  const onShowMoreClick = () => {
    setTicketsCount((prev) => prev + 5)
  }

  const loadOrErrorAlert = !tickets.length ? (
    <Alert type="loading" message="Билеты загружаются" />
  ) : (
    <Alert type="error" message="Рейсов, подходящих под заданные фильтры, не найдено" />
  )

  const mainContent = (
    <>
      {initialTickets.map(({ price, carrier, segments }, i) => {
        const key = `${price}${carrier}${i}`
        return <Ticket key={key} price={price} carrier={carrier} segments={segments} />
      })}
      <button className={s.button} type="button" onClick={onShowMoreClick}>
        Показать еще 5 билетов!
      </button>
    </>
  )

  return (
    <div className={s.container}>
      <div className={s.tabs}>{tabs}</div>

      {!initialTickets.length ? loadOrErrorAlert : mainContent}
    </div>
  )
}

export default MainBlock
