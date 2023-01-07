import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/global'
import { RootProvider } from '../contexts/root'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <NextUIProvider>
        <GlobalStyle />
        <ToastContainer
          style={{ zIndex: 10000, fontSize: 18, fontFamily: 'Rubik' }}
        />
        <Component {...pageProps} />
      </NextUIProvider>
    </RootProvider>
  )
}
