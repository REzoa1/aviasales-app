import React from 'react'

import SideBar from '../SideBar/SideBar'
import MainBlock from '../MainBlock/MainBlock'
import { ReactComponent as AppLogo } from '../../img/Logo.svg'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.page}>
      <AppLogo className={s.page__logo} />
      <div className={s.page__wrapper}>
        <SideBar />
        <MainBlock />
      </div>
    </div>
  )
}

export default App
