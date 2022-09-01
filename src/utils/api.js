import {checkResponse} from './utils'

const options = {
  baseApiUrl: 'https://norma.nomoreparties.space/api/ingredients'
}

const getData = () => {
  return fetch(options.baseApiUrl)
          .then(checkResponse)
}

export {
  getData
}