import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'

Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--lato-font' })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
