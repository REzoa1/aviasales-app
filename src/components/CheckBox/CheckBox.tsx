import React from 'react'

import s from './CheckBox.module.scss'

type Props = {
  id: string
  name: string
}

function CheckBox({ id, name }: Props) {
  return (
    <label className={s.label} htmlFor={id}>
      <input className={s.label__checkbox} type="checkbox" id={id} />
      {name}
    </label>
  )
}

export default CheckBox
