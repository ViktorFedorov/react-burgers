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

export {
  getData,
  sendData
}