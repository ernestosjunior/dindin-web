import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

type RootContextProps = {
  token: string | null
  setToken: Dispatch<SetStateAction<string | null>>
}
type RootProviderProps = { children: React.ReactNode }

export const RootContext = createContext<RootContextProps>(
  {} as RootContextProps
)

export const RootProvider = ({ children }: RootProviderProps) => {
  const tokenStorage =
    typeof window !== 'undefined' ? window.localStorage.getItem('token') : null

  const [token, setToken] = useState<string | null>(tokenStorage)

  return (
    <RootContext.Provider value={{ token, setToken }}>
      {children}
    </RootContext.Provider>
  )
}
