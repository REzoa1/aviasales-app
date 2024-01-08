import React from 'react'

import boardingPass from '../../assets/img/boarding-pass.png'
import emptyBox from '../../assets/img/empty-box.png'
import noContent from '../../assets/img/no-content.png'

import s from './Alert.module.scss'

type Props = {
  type: string
}

type MapType = { [Transfers in string]: { src: string; title: string; subtitle: string } }

function Alert({ type }: Props) {
  const loading = { src: boardingPass, title: 'Подождите...', subtitle: 'Билеты загружаются' }
  const failed = { src: noContent, title: 'Упс...', subtitle: 'Произошла ошибка' }
  const success = { src: emptyBox, title: 'Упс...', subtitle: 'Рейсов, подходящих под заданные фильтры, не найдено' }

  const alertMap = { idle: loading, loading, failed, success } as MapType

  const { src, title, subtitle } = alertMap[type]

  return (
    <div className={s.alert}>
      <h2 className={s.alert__title}>{title}</h2>
      <div className={s.alert__subtitle}>{subtitle}</div>
      <img className={s.alert__img} alt="alert-icon" src={src} />
    </div>
  )
}

export default Alert
