import { toast } from 'react-toastify'
import axios from 'axios'
import { SignUpBody, SignInBody } from './types'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export function getAPIClient(ctx?: any) {
  const { ['nextAuth.token']: token } = parseCookies(ctx)

  api.interceptors.request.use((config) => {
    return config
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}

export const recoverUserInformation = async () => {
  const { data } = await getAPIClient().get('/users')
  return data
}

export const handleSignUp = async (signUpBody: SignUpBody) => {
  const { data } = await api.post('/users', signUpBody)
  if (!data) return toast.error('Erro ao efetuar cadastro. Tente novamente!')
  return data
}

export const signInRequest = async (signInBody: SignInBody) => {
  const { data } = await api.post('/auth', signInBody)
  return data
}

export const getReleases = async () => {
  const { data } = await api.get('/release')
  return data
}
