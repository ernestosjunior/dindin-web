import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}
