import {checkResponse} from './utils'

const options = {
  baseApiUrl: 'https://norma.nomoreparties.space/api/ingredients',
  addOrderUrl: 'https://norma.nomoreparties.space/api/orders',
  headers: {
    'Content-Type': 'application/json',
  }
}

const getData = () => {
  return fetch(options.baseApiUrl)
    .then(checkResponse)
}

const sendData = (idsArray) => {
  return fetch(options.addOrderUrl, {
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