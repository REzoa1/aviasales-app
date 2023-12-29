import React from 'react'

import { useAppDispatch } from '../../store'
import { filterData } from '../../store/slices/filter'

import s from './CheckBox.module.scss'

type Props = {
  id: string
  name: string
  checked?: boolean
}

function CheckBox({ id, name, checked }: Props) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(filterData(id))
  }

  return (
    <label className={s.label} htmlFor={id}>
      <input className={s.label__checkbox} checked={checked} type="checkbox" id={id} onChange={onClick} />
      {name}
    </label>
  )
}

CheckBox.defaultProps = {
  checked: false,
}

export default CheckBox
