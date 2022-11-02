import React, {useState} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'

const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  const inputHandler = (e) => {
    setFormValue(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <form className='form'>
        <div className={`mt-6 input`}>
          <Input
            onChange={inputHandler}
            value={formValue.name}
            name={'name'}
            type={'text'}
            placeholder={'Имя'} />
        </div>
        <div className={`mt-6 input`}>
          <Input
            onChange={inputHandler}
            value={formValue.email}
            name={'email'}
            type={'email'}
            placeholder={'E-mail'} />
        </div>
        <div className={`mt-6 mb-6 input`}>
          <Input
            onChange={inputHandler}
            value={formValue.password}
            name={'password'}
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