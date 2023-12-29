import React from 'react'

import CheckBox from '../CheckBox/CheckBox'
import { selectData } from '../../store/slices/filter'
import { useAppSelector } from '../../store'

import s from './SideBar.module.scss'

function SideBar() {
  const { transfers } = useAppSelector(selectData)

  const elements = transfers.map(({ id, name, checked }) => <CheckBox key={id} id={id} name={name} checked={checked} />)

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__title}>Количество пересадок</div>
      {elements}
    </div>
  )
}

export default SideBar
