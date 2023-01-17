import React, { useState } from 'react'
import { BaseLayout, RegisterModal } from '../../components'
import returnIcon from '../../assets/return.svg'
import addIcon from '../../assets/add.svg'
import Image from 'next/image'
import styles from './styles.module.css'
import { HomeProps } from '../../pages'
import { useRoot } from '../../hooks/useRoot'
import { createCategory } from '../../services/api'
import { toast } from 'react-toastify'

interface CategoriesTemplateProps extends Partial<HomeProps> {}

export function CategoriesTemplate({
  categories = [],
  setCategories,
}: CategoriesTemplateProps) {
  const [form, setForm] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { isAuthenticated, user, setContainer } = useRoot()

  const handleSubmit = () => {
    try {
      setLoading(true)
      const newCategory = createCategory({ title: form, userId: user.id })
      setCategories((prev: any) => [...prev, newCategory])
      setVisible(false)
      toast.success('A nova categoria foi adicionada com sucesso!')
    } catch (error) {
      toast.error('Erro ao adicionar sua categoria. Tente novamente!')
    } finally {
      setForm('')
      setLoading(false)
    }
  }

  const inputs = [
    {
      label: 'Nome da categoria',
      name: 'title',
      value: form,
    },
  ]

  return (
    <>
      <RegisterModal
        hideButtonsType
        visible={visible}
        title="Nova Categoria"
        closeHandler={() => setVisible(false)}
        onChange={(e: any) => setForm(e.target.value)}
        inputs={inputs}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <BaseLayout hasLogoutButton={isAuthenticated}>
        <div className={styles.top}>
          <button
            className={styles.backButton}
            onClick={() => setContainer('home')}
          >
            <Image
              src={returnIcon}
              width={28}
              height={32}
              alt="Botão voltar para a home"
            />
            <p>Voltar</p>
          </button>
          <button className={styles.addButton} onClick={() => setVisible(true)}>
            <Image
              src={addIcon}
              width={28}
              height={32}
              alt="Botão adicionar nova categoria"
            />
            <p>Adicionar</p>
          </button>
        </div>
        <h1 className={styles.title}>Minhas Categorias</h1>
        <section className={styles.categoriesSection}>
          {categories.map((category: any) => (
            <p key={category.title}>{category.title}</p>
          ))}
        </section>
      </BaseLayout>
    </>
  )
}
