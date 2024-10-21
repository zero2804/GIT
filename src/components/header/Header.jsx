import React from 'react'
import s from './header.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
        <h1 className={s.header__title}>GITHUB FINDER</h1>
    </div>  
  )
}

export default Header