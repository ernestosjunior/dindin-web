import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo-long.svg'
import * as S from './styles'

export interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <S.BaseLayout>
      <Image src={logo} alt="Dindin logo" className="logo" />
      <S.Container>{children}</S.Container>
    </S.BaseLayout>
  )
}
