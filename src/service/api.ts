import { API_BASE_URL, REQUEST_TIMEOUT } from '../const'
import axios, { AxiosInstance } from 'axios'

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT
  })

  return api
}
