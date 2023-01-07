import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { BaseLayout, Modal, Input } from '../../components'
import * as S from './styles'

const initialState = { email: '', password: '' }

export const SignInTemplate = () => {
  const [form, setForm] = useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <BaseLayout>
      <Modal visible hasCloseButton={false} preventClose blur>
        <S.Container>
          <h1>Login</h1>
          <div className="form">
            <Input label="Email" onChange={onChange} name="email" />
            <Input
              label="Senha"
              onChange={onChange}
              name="password"
              type="password"
            />
          </div>
          <button>Entrar</button>
        </S.Container>
      </Modal>
    </BaseLayout>
  )
}
