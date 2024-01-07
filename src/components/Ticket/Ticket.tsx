import React from 'react'

import { TicketType } from '../../types'
import { getFormattedPrice } from '../../utils/helpers'

import Segment from './Segment/Segment'
import s from './Ticket.module.scss'

function Ticket({ price, carrier, segments }: TicketType) {
  const formattedPrice = getFormattedPrice(price)

  const body = segments.map(({ origin, destination, date, duration, stops }, i) => {
    const key = `segment-${i}`
    return <Segment key={key} origin={origin} destination={destination} date={date} duration={duration} stops={stops} />
  })

  return (
    <div className={s.ticket}>
      <header className={s.ticket__header}>
        <h3 className={s.ticket__price}>{formattedPrice}</h3>
        <img className={s.ticket__logo} src={`https://pics.avs.io/110/40/${carrier}.png`} alt={`${carrier}-logo`} />
      </header>
      <div className={s.ticket__body}>{body}</div>
    </div>
  )
}

export default Ticket
