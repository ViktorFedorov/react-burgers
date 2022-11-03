import React from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {registerUserThunk, setRegisterFormValue} from '../../services/actions/register-form'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const {name, email, password} = useSelector(store => store.register)

  const inputHandler = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value))
  }

  // тут нужно отправлять асинхронный экшен типа dispatch(middlewareThunk)
  // так же необходимы экшены на отчистку полей формы
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUserThunk(name, email, password))
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <form
        onSubmit={handleSubmit}
        className='form'>
        <div className={`mt-6 input`}>
          <Input
            onChange={inputHandler}
            value={name}
            name={'name'}
            type={'text'}
            placeholder={'Имя'} />
        </div>
        <div className={`mt-6 input`}>
          <Input
            onChange={inputHandler}
            value={email}
            name={'email'}
            type={'email'}
            placeholder={'E-mail'} />
        </div>
        <div className={`mt-6 mb-6 input`}>
          <Input
            onChange={inputHandler}
            value={password}
            name={'password'}
            type={'password'}
            placeholder={'Пароль'} />
        </div>
        <div className='send_button'>
          <Button
            htmlType='submit'
            onClick={handleSubmit}>Зарегистрироваться</Button>
        </div>
      </form>
      <p className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>Уже зарегистрированы?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default RegisterPage