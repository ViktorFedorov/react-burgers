import React from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom'
import {createUser} from '../../utils/api'
import {useDispatch, useSelector} from 'react-redux'
import {setRegisterFormValue} from '../../services/actions/register-form'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const {name, email, password} = useSelector(store => store.register)

  const inputHandler = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value))
  }

  const handleButtonClick = () => {
    createUser(email, password, name)
      // .catch(console.log)
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <form className='form'>
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
      </form>
      <Button onClick={handleButtonClick}>Зарегистрироваться</Button>
      <p className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>Уже зарегистрированы?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default RegisterPage