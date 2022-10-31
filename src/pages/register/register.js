import React from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <form className='form'>
        <div className={`mt-6 input`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={2}/>
        </div>
        <div className={`mt-6 input`}>
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
      <Button>Зарегистрироваться</Button>
      <p className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>Уже зарегистрированы?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default RegisterPage