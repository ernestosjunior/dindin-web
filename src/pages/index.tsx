import { NextSeo } from 'next-seo'
import { getAPIClient } from '../services/api'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { HomeTemplate } from '../templates'

export interface HomeProps {
  releases: any
}

export default function Home(props: HomeProps) {
  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <HomeTemplate {...props} />
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
