import React, {useState} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './login.module.css'
import {Link} from 'react-router-dom'

const LoginPage = () => {

  return (
    <div className={styles.login}>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <form className={styles.form}>
        <div className={`mt-6 ${styles.input}`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={2}/>
        </div>
        <div className={`mt-6 ${styles.input}`}>
          <Input
            type={'email'}
            placeholder={'E-mail'} />
        </div>
        <div className={`mt-6 mb-6 ${styles.input}`}>
          <Input
            type={'password'}
            placeholder={'Пароль'} />
        </div>
      </form>
      <Button>Зарегистрироваться</Button>
      <p className={`text mt-20 text_type_main-default text_color_inactive ${styles.isRegistered}`}>Уже зарегистрированы?
        <Link to='/enter'>Войти</Link>
      </p>
    </div>
  )
}

export default LoginPage