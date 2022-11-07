import React, {useState} from 'react'
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useNavigate} from 'react-router-dom'
import {authUser} from '../../utils/api'

const LoginPage = () => {
  const navigate = useNavigate()

  const [form, setValue] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(false)

  const inputHandler = (e) => {
    setError(false)

    setValue(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const login = (e) => {
    e.preventDefault()
    setError(false)

    authUser(form.email, form.password)
      .then(data => {

        console.log(data)

        if (data.success) {

          // диспатчим экшн добавления юзера в стор и редиректимся на страртовую стр
          // navigate('/')
        }

      })
      .catch(() => setError(true))
  }

  return (
    <div className='wrapper'>
      <h1 className='text text_type_main-medium'>Вход</h1>
      <form className='form mt-6'>
        <div className='input'>
          <Input
            error={error}
            errorText={'некорректные данные'}
            onChange={inputHandler}
            value={form.email}
            name={'email'}
            type={'email'}
            placeholder={'E-mail'} />
        </div>
        <div className={`mt-6 mb-6 input`}>
          <Input
            onChange={inputHandler}
            value={form.password}
            name={'password'}
            type={'password'}
            icon='ShowIcon'
            placeholder={'Пароль'} />
        </div>
        <div className='send_button'>
          <Button onClick={login}>Войти</Button>
        </div>
      </form>
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