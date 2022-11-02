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

// отправка email пользователя на сервер для проверки его существования
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

// создание пользователя
const createUser = (email, password, name) => {
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

export {
  getData,
  sendData,
  changePassword,
  createUser
}