import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { BaseLayout, Modal, Input } from '../../components'
import * as S from './styles'
import { handleSignIn } from '../../services/api'
import { useRouter } from 'next/router'

const initialState = { email: '', password: '' }

export const SignInTemplate = () => {
  const [form, setForm] = useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const router = useRouter()

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
          <button
            onClick={() => handleSignIn(form, router)}
            disabled={!form.email || !form.password}
          >
            Entrar
          </button>
        </S.Container>
      </Modal>
    </BaseLayout>
  )
}
