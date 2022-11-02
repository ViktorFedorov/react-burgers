export const checkResponse = (response) => {
  console.log(response)
  if (!response.ok) {
    return Promise.reject(`Ошибка ${response.status}`)
  }
  return response.json()
}
