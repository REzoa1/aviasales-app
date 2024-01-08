import React from 'react'

import CheckBox from '../CheckBox/CheckBox'
import { useAppSelector } from '../../store'
import { selectTickets } from '../../store/slices/tickets'
import { selectFilter } from '../../store/slices/filter'

import s from './SideBar.module.scss'

function SideBar() {
  const { filters } = useAppSelector(selectFilter)
  const { tickets } = useAppSelector(selectTickets)

  const elements = filters.map(({ id, name, checked }) => (
    <CheckBox key={id} id={id} name={name} checked={checked} disabled={!tickets.length} />
  ))

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__title}>Количество пересадок</div>
      {elements}
    </div>
  )
}

export default SideBar
