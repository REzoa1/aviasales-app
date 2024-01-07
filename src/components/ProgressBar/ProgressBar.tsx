import React from 'react'

import s from './ProgressBar.module.scss'

type Props = { progress: number }

function ProgressBar({ progress }: Props) {
  return (
    <div className={s.progress}>
      <div className={s.progress__bar} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar
