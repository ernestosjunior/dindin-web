import { useState } from 'react'
import { BaseLayout, Modal, Input } from '../../components'
import styles from './styles.module.css'
import { useRoot } from '../../hooks/useRoot'
import Link from 'next/link'

const initialState = { email: '', password: '' }

export const SignInTemplate = () => {
  const { signIn } = useRoot()
  const [form, setForm] = useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

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
            onClick={() => signIn(form)}
            disabled={!form.email || !form.password}
          >
            Entrar
          </button>
          <Link className={styles.redirectButton} href="/signup">
            Cadastre-se
          </Link>
        </section>
      </Modal>
    </BaseLayout>
  )
}
