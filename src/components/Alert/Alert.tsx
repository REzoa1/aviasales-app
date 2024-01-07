import React from 'react'

import emptyBox from '../../assets/img/empty-box.png'
import boardingPass from '../../assets/img/boarding-pass.png'

import s from './Alert.module.scss'

type Props = {
  type: string
  message?: string
}

type MapType = { [Transfers in string]: { src: string; title: string; subtitle?: string } }

function Alert({ type, message }: Props) {
  const dataMap = {
    error: {
      src: emptyBox,
      title: 'Упс...',
      subtitle: message || 'Рейсов, подходящих под заданные фильтры, не найдено',
    },
    loading: { src: boardingPass, title: 'Подождите...', subtitle: message || 'Билеты загружаются' },
  } as MapType

  const { src, title, subtitle } = dataMap[type]

  return (
    <div className={s.alert}>
      <h2 className={s.alert__title}>{title}</h2>
      <div className={s.alert__subtitle}>{subtitle}</div>
      <img className={s.alert__img} alt="alert-icon" src={src} />
    </div>
  )
}

Alert.defaultProps = {
  message: '',
}

export default Alert
