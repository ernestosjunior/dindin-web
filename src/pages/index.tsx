import { NextSeo } from 'next-seo'
import { BaseLayout, Modal } from '../components'

export default function Home() {
  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <BaseLayout>
        <h1>Home</h1>
      </BaseLayout>
    </>
  )
}
