import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo-long.svg'
import styles from './styles.module.css'

export interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className={styles.baseLayout}>
      <Image src={logo} alt="Dindin logo" className={styles.logo} />
      <section className={styles.container}>{children}</section>
    </main>
  )
}
