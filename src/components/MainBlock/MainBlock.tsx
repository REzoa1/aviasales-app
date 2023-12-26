/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { addMinutes, constructFrom, format, formatDuration, intervalToDuration } from 'date-fns'

import { TABS, TICKETS } from '../../utils/constants'
import logo from '../../img/S7.png'

import s from './MainBlock.module.scss'

function MainBlock() {
  const [currTab, setCurrTab] = useState('Самый дешевый')

  const tabs = TABS.map((tab) => {
    const isActiveTab = currTab === tab

    const handleClick = () => {
      setCurrTab(tab)
    }

    return (
      <button type="button" key={tab} className={`${s.tabs__item} ${isActiveTab && s.active}`} onClick={handleClick}>
        {tab}
      </button>
    )
  })

  const tickets = TICKETS.map(({ price, carrier, segments }, i) => {
    const key = `${price}${carrier}${i}`

    const right = String(price).slice(-3)
    const left = String(price).slice(0, right.length - 1)
    const formattedPrice = `${left} ${right}`

    const [
      { origin, destination, date, duration, stops },
      { origin: or, destination: de, date: da, duration: du, stops: st },
    ] = segments

    const sampleDate = new Date(date)
    const start = format(sampleDate, 'HH:mm')
    const end = format(addMinutes(sampleDate, duration), 'HH:mm')

    const sampleDate2 = new Date(da)
    const start2 = format(sampleDate2, 'HH:mm')
    const end2 = format(addMinutes(sampleDate, duration), 'HH:mm')

    const time = format(new Date(0, 0, 0, 0, duration), 'HHч mmм')
    const time2 = format(new Date(0, 0, 0, 0, du), 'HHч mmм')

    const elements = (
      <div className={s.tickets__body}>
        <div className={s.tickets__container}>
          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>
              {origin} - {destination}
            </div>
            <div className={s.tickets__time}>
              {start} - {end}
            </div>
          </div>

          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>В пути</div>
            <div className={s.tickets__time}>{time}</div>
          </div>
          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>{stops.length} пересадкa</div>
            <div className={s.tickets__time}>{stops.join(', ')}</div>
          </div>
        </div>

        <div className={s.tickets__container}>
          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>
              {or} - {de}
            </div>
            <div className={s.tickets__time}>
              {start2} - {end2}
            </div>
          </div>

          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>В пути</div>
            <div className={s.tickets__time}>{time2}</div>
          </div>

          <div className={s.tickets__wrap}>
            <div className={s.tickets__subtitle}>{st.length} пересадки</div>

            <div className={s.tickets__time}>{st.join(', ')}</div>
          </div>
        </div>
      </div>
    )

    return (
      <div key={key} className={s.tickets__item}>
        <header className={s.tickets__header}>
          <h3 className={s.tickets__title}>{formattedPrice} Р</h3>
          <img className={s.tickets__logo} src={logo} alt="" />
        </header>
        {elements}
      </div>
    )
  })

  return (
    <div>
      <div className={s.tabs}>{tabs}</div>
      <div className={s.tickets}>{tickets}</div>
      <button className={s.button} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default MainBlock
