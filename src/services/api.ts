import axios from 'axios'
import { SignUpBody, SignInBody } from './types'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: 'http://ec2-3-86-114-110.compute-1.amazonaws.com',
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
