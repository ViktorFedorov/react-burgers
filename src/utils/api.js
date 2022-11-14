import {checkResponse, getCookie} from './utils'

const options = {
  baseApiUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  }
}

const getData = () => {
  return fetch(`${options.baseApiUrl}/ingredients`)
    .then(checkResponse)
}

const sendData = (idsArray) => {
  return fetch(`${options.baseApiUrl}/orders`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      ingredients: idsArray
    })
  })
    .then(checkResponse)
}

// запрос на смену пароля
const resetPassword = (email) => {
  return fetch(`${options.baseApiUrl}/password-reset`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      email
    })
  })
    .then(checkResponse)
}

//смена пароля
const updatePassword = (password, token) => {
  return fetch(`${options.baseApiUrl}/password-reset/reset`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      password,
      token
    })
  })
    .then(checkResponse)
}

// регистрация
const registerUser = (email, password, name) => {
  return fetch(`${options.baseApiUrl}/auth/register`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
    .then(checkResponse)
}

// авторизация
const login = (email, password) => {
  return fetch(`${options.baseApiUrl}/auth/login`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(checkResponse)
}

// получение данных о пользователе
const getUserData = () => {
  return fetch(`${options.baseApiUrl}/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      }
    })
    .then(checkResponse)
}

// изменение данных о пользователе
const updateUserData = (name, email, password) => {
  return fetch(`${options.baseApiUrl}/auth/user`)
}

// выход
const logout = (token) => {
  return fetch(`${options.baseApiUrl}/auth/logout`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      token
    })
  })
    .then(checkResponse)
}

export {
  getData,
  sendData,
  resetPassword,
  updatePassword,
  registerUser,
  getUserData,
  updateUserData,
  login,
  logout
}