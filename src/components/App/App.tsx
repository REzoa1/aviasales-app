import React, { useEffect } from 'react'

import SideBar from '../SideBar/SideBar'
import MainBlock from '../MainBlock/MainBlock'
import ProgressBar from '../ProgressBar/ProgressBar'
import { ReactComponent as AppLogo } from '../../img/Logo.svg'
import { getTicketsPart, selectTickets } from '../../store/slices/tickets'
import { useAppDispatch, useAppSelector } from '../../store'

import s from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()
  const { progress, stop, tickets } = useAppSelector(selectTickets)

  useEffect(() => {
    if (!stop) {
      dispatch(getTicketsPart())
    }
  }, [dispatch, stop, tickets])

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
