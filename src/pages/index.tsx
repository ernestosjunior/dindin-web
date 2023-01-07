import { NextSeo } from 'next-seo'
import { BaseLayout } from '../components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRoot } from '../hooks/useRoot'

export default function Home() {
  const { token } = useRoot()
  const router = useRouter()

  useEffect(() => {
    if (!token) router.push('/signin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <BaseLayout>
        <h1>Home</h1>
      </BaseLayout>
    </>
  )
}
