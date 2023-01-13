import { useState } from 'react'
import { BaseLayout, Modal, Input } from '../../components'
import { handleSignUp } from '../../services/api'
import styles from './styles.module.css'

const initialState = { name: '', email: '', password: '' }

export const SignUpTemplate = () => {
  const [form, setForm] = useState(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <BaseLayout>
      <Modal visible hasCloseButton={false} preventClose blur>
        <section className={styles.container}>
          <h1 className={styles.title}>Cadastro</h1>
          <div className={styles.form}>
            <Input label="Nome" onChange={onChange} name="name" />
            <Input label="Email" onChange={onChange} name="email" />
            <Input label="Senha" onChange={onChange} name="password" />
          </div>
          <button
            onClick={() => handleSignUp(form)}
            disabled={!form.email || !form.password || !form.name}
          >
            Cadastrar
          </button>
        </section>
      </Modal>
    </BaseLayout>
  )
}
