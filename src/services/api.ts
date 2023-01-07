import axios from 'axios'
import { SignUpBody, SignInBody } from './types'

export const api = axios.create({
  baseURL: 'http://ec2-3-86-114-110.compute-1.amazonaws.com',
})

export const handleSignUp = async (signUpBody: SignUpBody) => {
  const { data } = await axios.post('/users', signUpBody)
  return data
}

export const handleSignIn = async (signInBody: SignInBody) => {
  const { data } = await axios.post('/auth', signInBody)
  typeof window !== 'undefined' && window.localStorage.setItem('token', data)
  return data
}
