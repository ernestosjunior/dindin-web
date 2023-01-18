import { useState } from 'react'
import { BaseLayout, Modal, Input, Button } from '../../components'
import styles from './styles.module.css'
import { useRoot } from '../../hooks/useRoot'
import Link from 'next/link'

const initialState = { email: '', password: '' }

export const SignInTemplate = () => {
  const { signIn } = useRoot()
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSignIn = async () => {
    try {
      setLoading(true)
      signIn(form)
    } catch (error) {
    } finally {
      setLoading(false)
    }
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
          <Button
            isLoading={loading}
            label="Entrar"
            disabled={!form.email || !form.password}
            onClick={handleSignIn}
          />
          <Link className={styles.redirectButton} href="/signup">
            Cadastre-se
          </Link>
        </section>
      </Modal>
    </BaseLayout>
  )
}
