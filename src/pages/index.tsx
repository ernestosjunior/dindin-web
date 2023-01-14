import { NextSeo } from 'next-seo'
import { BaseLayout, TableRelease } from '../components'
import { getAPIClient, getReleases } from '../services/api'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

interface HomeProps {
  releases: any
}

export default function Home({ releases }: HomeProps) {
  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <BaseLayout>
        <h1>Home</h1>
        <TableRelease releases={releases} />
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { ['nextAuth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  const [releases] = await Promise.all([apiClient.get('/release')])

  return {
    props: { releases: releases.data },
  }
}
