import React from 'react'

import { useAppDispatch } from '../../store'
import { filterTickets } from '../../store/slices/tickets'

import s from './CheckBox.module.scss'

type Props = {
  id: string
  name: string
  checked?: boolean
  disabled: boolean
}

function CheckBox({ id, name, checked, disabled }: Props) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(filterTickets(id))
  }

  return (
    <label className={`${s.label} ${disabled && s['label--disabled']}`} htmlFor={id}>
      <input
        disabled={disabled}
        className={s.label__checkbox}
        checked={checked}
        type="checkbox"
        id={id}
        onChange={onClick}
      />
      {name}
    </label>
  )
}

CheckBox.defaultProps = {
  checked: false,
}

export default CheckBox
