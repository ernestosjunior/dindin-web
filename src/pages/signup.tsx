import { NextSeo } from 'next-seo'
import { SignUpTemplate } from '../templates'

export default function SignUp() {
  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <SignUpTemplate />
    </>
  )
}
