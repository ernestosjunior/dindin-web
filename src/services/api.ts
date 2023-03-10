import { generateDate } from './../utils/generateDate'
import { toast } from 'react-toastify'
import axios from 'axios'
import { SignUpBody, SignInBody } from './types'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: 'https://dindin-api-mmoh.onrender.com',
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

export const createCategory = async (createCategoryBody: any) => {
  const { data } = await getAPIClient().post('/category', createCategoryBody)
  if (!data) return toast.error('Erro ao cadastrar categoria. Tente novamente!')
  return data
}

export const createRelease = async (createReleaseBody: any) => {
  const form = {
    ...createReleaseBody,
  }
  form.categoryId = createReleaseBody.category
  form.date = generateDate(createReleaseBody.date)
  const { data } = await getAPIClient().post('/release', form)
  if (!data) return toast.error('Erro ao cadastrar categoria. Tente novamente!')
  return data
}
