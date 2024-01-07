import React from 'react'

import emptyBox from '../../img/empty-box.png'
import boardingPass from '../../img/boarding-pass.png'

import s from './Alert.module.scss'

type Props = {
  type: string
  message: string
}

type MapType = { [Transfers in string]: { src: string; title: string } }

function Alert({ type, message }: Props) {
  const dataMap = {
    error: { src: emptyBox, title: 'Упс...' },
    loading: { src: boardingPass, title: 'Подождите...' },
  } as MapType

  const { src, title } = dataMap[type]

  return (
    <div className={s.alert}>
      <h2 className={s.alert__title}>{title}</h2>
      <div className={s.alert__subtitle}>{message}</div>
      <img className={s.alert__img} alt="alert-icon" src={src} />
    </div>
  )
}

export default Alert
