import React from 'react'

import SideBar from '../SideBar/SideBar'
import MainBlock from '../MainBlock/MainBlock'
import ProgressBar from '../ProgressBar/ProgressBar'
import { ReactComponent as AppLogo } from '../../assets/img/Logo.svg'
import useDispatchTickets from '../../utils/useDispatchTickets'

import s from './App.module.scss'

function App() {
  const { stop, progress } = useDispatchTickets()

  return (
    <div className={s.page}>
      {!stop && <ProgressBar progress={progress} />}

      <AppLogo className={s.page__logo} />
      <div className={s.page__wrapper}>
        <SideBar />
        <MainBlock />
      </div>
    </div>
  )
}

export default App
