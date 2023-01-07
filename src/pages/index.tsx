import { NextSeo } from 'next-seo'
import { BaseLayout } from '../components'

export default function Home() {
  return (
    <BaseLayout>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <h1>Home</h1>
    </BaseLayout>
  )
}
