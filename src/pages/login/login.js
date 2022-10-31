import React from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Вход</h1>
      <form className='form mt-6'>
        <div className='input'>
          <Input
            type={'email'}
            placeholder={'E-mail'} />
        </div>
        <div className={`mt-6 mb-6 input`}>
          <Input
            type={'password'}
            placeholder={'Пароль'} />
        </div>
      </form>
      <Button>Войти</Button>
      <p
        className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>
        Вы — новый пользователь?
        <Link to='/register'>Зарегистрироваться</Link>
      </p>
      <p
        className={`text mt-4 text_type_main-default text_color_inactive isRegistered`}>
        Забыли пароль?
        <Link to='/forgot-password'>Восстановить пароль</Link>
      </p>
    </div>
  )
}

export default LoginPage