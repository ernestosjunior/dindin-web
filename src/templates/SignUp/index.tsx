import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { BaseLayout, Modal, Input } from '../../components'
import * as S from './styles'

const initialState = { name: '', email: '', password: '' }

export const SignUpTemplate = () => {
  const [form, setForm] = useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <NextSeo title="Dindin" openGraph={{ title: 'Dindin' }} />
      <BaseLayout>
        <Modal visible hasCloseButton={false} preventClose blur>
          <S.Container>
            <h1>Cadastro</h1>
            <div className="form">
              <Input label="Nome" onChange={onChange} name="name" />
              <Input label="Email" onChange={onChange} name="email" />
              <Input label="Senha" onChange={onChange} name="password" />
            </div>
            <button>Cadastrar</button>
          </S.Container>
        </Modal>
      </BaseLayout>
    </>
  )
}
