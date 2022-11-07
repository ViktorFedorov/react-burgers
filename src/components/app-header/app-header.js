import React from 'react'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import HeaderLink from '../header-link/header-link'
import styles from './app-header.module.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AppHeader = () => {
  const textDefault = 'text text_type_main-default'
  const {user} = useSelector(store => store.user)

  return (
    <header className={styles.header}>
      <nav className={`content ${styles.navigation}`}>
        <ul className={styles.list}>
          <li className='mr-7 ml-5'>
            <HeaderLink
              icon={<BurgerIcon type='primary'/>}
              textClass={textDefault}
              path='/'>
              Конструктор
            </HeaderLink>
          </li>
          <li>
            <HeaderLink
              icon={<ListIcon type='secondary' />}
              textClass={textDefault}
              path='/orders'>
              Лента заказов
            </HeaderLink>
          </li>
        </ul>
        <Link
          to='/'
          className={styles.logo}>
          <Logo />
        </Link>
        <div className={styles.cabinet}>
          <HeaderLink icon={<ProfileIcon type='secondary' />} textClass={textDefault} path='/register'>
            {user && user.name ? user.name : 'Личный кабинет'}
          </HeaderLink>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader