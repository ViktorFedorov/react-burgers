export const checkResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Ошибка ${response.status}`)
  }
  return response.json()
}
