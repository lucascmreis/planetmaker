import {api} from './api'

export const getPlanetService = async () => {
  const response = await api.get('/planets')
  console.log('response', response)
  return response
}