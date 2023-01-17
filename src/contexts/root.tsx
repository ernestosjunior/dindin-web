import React, { createContext, useState, useEffect } from 'react'
import { SignInBody } from '../services/types'
import { signInRequest, recoverUserInformation } from '../services/api'
import { setCookie, parseCookies } from 'nookies'
import { toast } from 'react-toastify'
import Router from 'next/router'

type RootContextProps = {
  isAuthenticated: boolean
  signIn: (user: SignInBody) => void
  user: any
  container: string
  setContainer: (key: string) => void
}
type RootProviderProps = { children: React.ReactNode }

export const RootContext = createContext<RootContextProps>(
  {} as RootContextProps
)

export const RootProvider = ({ children }: RootProviderProps) => {
  const [user, setUser] = useState<any>(null)
  const [container, setContainer] = useState('home')
  const isAuthenticated = !!user

  useEffect(() => {
    const { ['nextAuth.token']: token } = parseCookies()

    if (token) {
      recoverUserInformation().then((response) => {
        setUser({ user: response, token })
      })
    }
  }, [])

  const signIn = async (signInBody: SignInBody) => {
    const res = await signInRequest(signInBody)

    if (!res) return toast.error('Credenciais inválidas. Tente novamente!')

    setCookie(null, 'nextAuth.token', res.token, {
      maxAge: 60 * 60 * 8 /* Validade de 8 horas */,
    })

    setUser(res.user)

    Router.push('/')
  }

  return (
    <RootContext.Provider
      value={{ isAuthenticated, signIn, user, container, setContainer }}
    >
      {children}
    </RootContext.Provider>
  )
}
