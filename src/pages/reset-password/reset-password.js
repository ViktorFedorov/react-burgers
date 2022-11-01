import React from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'

const ResetPasswordPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <form className='form'>
        <div className='mt-6 mb-6 input'>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'} />
        </div>
        <div className='mb-6 input'>
          <Input
            type={'text'}
            placeholder={'Введите код из письма'} />
        </div>
      </form>
      <Button>Сохранить</Button>
      <p
        className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>
        Вспомнили пароль?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default ResetPasswordPage