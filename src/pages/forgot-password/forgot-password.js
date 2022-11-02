import React, {useState} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useNavigate} from 'react-router-dom'
import {changePassword} from '../../utils/api'

const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const inputHandler = (e) => setEmail(e.target.value)

  const buttonHandler = () => {
    return changePassword(email)
      .then(res => {
        if (res.success) {
          navigate('/reset-password')
        }
      })
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <form className='form'>
        <div className='mt-6 mb-6 input'>
          <Input
            onChange={inputHandler}
            value={email}
            type={'email'}
            placeholder={'Укажите e-mail'} />
        </div>
      </form>
      <Button onClick={buttonHandler}>Восстановить</Button>
      <p
        className={`text mt-20 text_type_main-default text_color_inactive isRegistered`}>
        Вспомнили пароль?
        <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default ForgotPasswordPage