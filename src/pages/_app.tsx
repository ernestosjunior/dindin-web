import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/global.css'

import { RootProvider } from '../contexts/root'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <NextUIProvider>
        <ToastContainer
          style={{ zIndex: 10000, fontSize: 18, fontFamily: 'Rubik' }}
        />
        <Component {...pageProps} />
      </NextUIProvider>
    </RootProvider>
  )
}
