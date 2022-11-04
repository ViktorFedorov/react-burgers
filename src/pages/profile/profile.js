import React from 'react'
import {Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {NavLink} from 'react-router-dom'
import styles from './profile.module.css'

const ProfilePage = () => {
  return (
    <div className={`content ${styles.wrapper}`}>
      <div className={`ml-5 mr-15 ${styles.nav}`}>
        <nav className='mt-10'>
          <ul className={`text text_type_main-medium ${styles.list}`}>
            <li className='mb-9'>
              <NavLink
                className={styles.link}
                to='/profile'>Профиль</NavLink>
            </li>
            <li className='mb-9'>
              <NavLink
                className={styles.link}
                to='/profile/orders'>История заказов</NavLink>
            </li>
            <li className=''>
              <NavLink
                className={styles.link}
                to='/exit'>Выход</NavLink>
            </li>
          </ul>
        </nav>
        <p className='mt-25 text text_type_main-default text_color_inactive'>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className='form mt-6'>
        <div className='input'>
          <Input
            name={'name'}
            type={'text'}
            icon='EditIcon'
            placeholder={'Имя'} />
        </div>
        <div className={`mt-6 mb-6 input`}>
          <Input
            name={'login'}
            type={'text'}
            icon='EditIcon'
            placeholder={'Логин'} />
        </div>
        <div className={`mb-6 input`}>
          <Input
            name={'password'}
            type={'password'}
            icon='EditIcon'
            placeholder={'Пароль'} />
        </div>
      </form>
    </div>
  )
}

export default ProfilePage