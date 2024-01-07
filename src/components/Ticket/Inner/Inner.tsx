import React from 'react'

import s from '../Ticket.module.scss'

type PropsType = {
  title: string
  subtitle: string
}

function Inner({ title, subtitle }: PropsType) {
  return (
    <div className={s.ticket__inner}>
      <div className={s.ticket__title}>{title}</div>
      {subtitle && <div className={s.ticket__subtitle}>{subtitle}</div>}
    </div>
  )
}
export default Inner
