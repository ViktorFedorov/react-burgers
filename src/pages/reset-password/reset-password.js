import React, {useState} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'

const ResetPasswordPage = () => {
  const [formValue, setFormValue] = useState({
    password: '',
    token: ''
  })

  const inputHandler = (e) => {
    setFormValue(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <form className='form'>
        <div className='mt-6 mb-6 input'>
          <Input
            onChange={inputHandler}
            value={formValue.password}
            name={'password'}
            type={'password'}
            placeholder={'Введите новый пароль'} />
        </div>
        <div className='mb-6 input'>
          <Input
            onChange={inputHandler}
            value={formValue.token}
            name={'token'}
            type={'text'}
            placeholder={'Введите код из письма'} />
        </div>
        <div className='send_button'>
          <Button>Сохранить</Button>
        </div>
      </form>
      <p
        className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>
        Вспомнили пароль?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default ResetPasswordPage