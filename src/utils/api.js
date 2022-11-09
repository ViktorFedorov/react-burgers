import {checkResponse} from './utils'

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

const changePassword = (email) => {
  return fetch(`${options.baseApiUrl}/password-reset`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify({
      email
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
const authUser = (email, password) => {
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

export {
  getData,
  sendData,
  changePassword,
  registerUser,
  authUser
}