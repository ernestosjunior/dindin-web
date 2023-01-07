import { NextSeo } from 'next-seo'
import { SignInTemplate } from '../templates'

export default function SignIp() {
  return (
    <>
      <NextSeo title="Dindin | Login" openGraph={{ title: 'Dindin | Login' }} />
      <SignInTemplate />
    </>
  )
}
