import { NextSeo } from 'next-seo'
import { getAPIClient } from '../services/api'
import { parseCookies } from 'nookies'
import { HomeTemplate, CategoriesTemplate } from '../templates'
import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRoot } from '../hooks/useRoot'

export interface HomeProps {
  releases: any
  categories: any
  setCategories: any
}

export default function Home(props: HomeProps) {
  const [categoriesState, setCategoriesState] = useState(props.categories)
  const { container } = useRoot()

  const containers = {
    home: <HomeTemplate {...props} />,
    categories: (
      <CategoriesTemplate
        categories={categoriesState}
        setCategories={setCategoriesState}
      />
    ),
  }

  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      {containers[container as keyof typeof containers]}
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

  const [releases, categories] = await Promise.all([
    apiClient.get('/release'),
    apiClient.get('/category'),
  ])

  return {
    props: { releases: releases.data, categories: categories.data },
  }
}
