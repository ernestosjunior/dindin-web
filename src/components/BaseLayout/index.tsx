import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo-long.svg'
import { destroyCookie } from 'nookies'
import Router from 'next/router'
import styles from './styles.module.css'

export interface BaseLayoutProps {
  children: React.ReactNode
  hasLogoutButton?: boolean
}

export const BaseLayout = ({
  children,
  hasLogoutButton = false,
}: BaseLayoutProps) => {
  return (
    <main className={styles.baseLayout}>
      <header className={styles.header}>
        <Image src={logo} alt="Dindin logo" />
        {hasLogoutButton && (
          <button
            onClick={() => {
              destroyCookie(null, 'nextAuth.token')
              Router.push('/signin')
            }}
          >
            Sair
          </button>
        )}
      </header>
      <section className={styles.container}>{children}</section>
    </main>
  )
}
