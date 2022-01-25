import {api} from './api'

export const getPlanetService = async () => {
  const response = await api.get('/planets')
  return response
}

export const createPlanetService = async (data) => {
  const response = await api.post('/planets', data)
  return response
}