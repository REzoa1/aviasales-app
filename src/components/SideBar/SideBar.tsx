import React from 'react'

import CheckBox from '../CheckBox/CheckBox'
import { CHECKBOXES } from '../../utils/constants'

import s from './SideBar.module.scss'

function SideBar() {
  const elements = CHECKBOXES.map(({ id, name }) => <CheckBox key={id} id={id} name={name} />)

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__title}>Количество пересадок</div>
      {elements}
    </div>
  )
}

export default SideBar
