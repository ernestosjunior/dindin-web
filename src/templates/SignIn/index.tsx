import { useState } from 'react'
import { BaseLayout, Modal, Input } from '../../components'
import styles from './styles.module.css'
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
        <section className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.form}>
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
        </section>
      </Modal>
    </BaseLayout>
  )
}
