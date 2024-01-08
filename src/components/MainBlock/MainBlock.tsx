import React, { useState } from 'react'

import Tabs from '../Tabs/Tabs'
import Ticket from '../Ticket/Ticket'
import Alert from '../Alert/Alert'
import { useTickets } from '../../hooks'
import { useAppSelector } from '../../store'
import { selectTickets } from '../../store/slices/tickets'

import s from './MainBlock.module.scss'

function MainBlock() {
  const { status } = useAppSelector(selectTickets)
  const [ticketsCount, setTicketsCount] = useState(5)

  const initialTickets = useTickets().slice(0, ticketsCount)

  const onShowMoreClick = () => {
    setTicketsCount((prev) => prev + 5)
  }

  const mainContent = (
    <>
      <div>
        {initialTickets.map(({ price, carrier, segments }, i) => {
          const key = `${price}${carrier}${i}`
          return <Ticket key={key} price={price} carrier={carrier} segments={segments} />
        })}
      </div>
      <button className={s.button} type="button" onClick={onShowMoreClick}>
        Показать еще 5 билетов!
      </button>
    </>
  )

  return (
    <div className={s.container}>
      <Tabs setTicketsCount={setTicketsCount} />

      {!initialTickets.length ? <Alert type={status} /> : mainContent}
    </div>
  )
}

export default MainBlock
