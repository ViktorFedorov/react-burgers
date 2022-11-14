import React, {useEffect} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {NavLink, useNavigate} from 'react-router-dom'
import styles from './profile.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getUserThunk, setUserProfile, updateUserThunk} from '../../services/actions/user'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const {user, isAuth} = useSelector(store => store.user)
  const navigate = useNavigate()

  const inputHandler = (e) => {
    dispatch(setUserProfile(e.target.name, e.target.value))
  }

  useEffect(() => {
    dispatch(getUserThunk())
  }, [])

  useEffect(() => {
    if (!isAuth) navigate('/login')
  }, [isAuth, navigate])

  const updateUserData = (e) => {
    e.preventDefault()

    const {name, email} = user
    dispatch(updateUserThunk(name, email))
  }

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
            <li>
              <NavLink
                className={styles.link}
                to='/logout'>Выход</NavLink>
            </li>
          </ul>
        </nav>
        <p className='mt-25 text text_type_main-default text_color_inactive'>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form
        onSubmit={updateUserData}
        className='form mt-6'>
        <div className='input'>
          <Input
            onChange={inputHandler}
            value={user.name}
            name='name'
            type='text'
            icon='EditIcon'
            placeholder='Имя' />
        </div>
        <div className='mt-6 mb-6 input'>
          <Input
            onChange={inputHandler}
            value={user.email}
            name='email'
            type='text'
            icon='EditIcon'
            placeholder='Логин' />
        </div>
        <div className='mb-6 input'>
          <Input
            onChange={inputHandler}
            value='1111111'
            name='password'
            type='password'
            icon='EditIcon'
            placeholder='Пароль' />
        </div>
        <div className={styles.buttons}>
          <Button
            type='secondary'
            size='medium'
            htmlType='button'>Отмена</Button>
          <Button
            htmlType='submit'
            onClick={updateUserData}>Сохранить</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage