import axios from 'axios'
import { SignUpBody, SignInBody } from './types'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
})

export const handleSignUp = async (signUpBody: SignUpBody) => {
  const { data } = await api.post('/users', signUpBody)
  return data
}

export const handleSignIn = async (signInBody: SignInBody, router: any) => {
  const { data } = await api.post('/auth', signInBody)
  if (!data) return toast.error('Credenciais inválidas.')
  typeof window !== 'undefined' && window.localStorage.setItem('token', data)
  router.push('/')
  return data
}
