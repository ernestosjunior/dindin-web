import React, { useState } from 'react'
import {
  BaseLayout,
  TableRelease,
  Summary,
  RegisterModal,
} from '../../components'
import filterIcon from '../../assets/filter.svg'
import categoryIcon from '../../assets/category.svg'
import Image from 'next/image'
import styles from './styles.module.css'
import { HomeProps } from '../../pages'
import { useRoot } from '../../hooks/useRoot'
import { initialValue } from '../../utils/initialValueForm'

interface HomeTemplateProps extends HomeProps {}

export function HomeTemplate({ releases, categories = [] }: HomeTemplateProps) {
  const [form, setForm] = useState(initialValue)
  const [visible, setVisible] = useState(false)
  const { isAuthenticated, setContainer } = useRoot()

  const options = categories?.map((category: any) => ({
    option: category.title,
    value: category.id,
  }))

  const inputs = [
    {
      label: 'Valor',
      name: 'value',
      value: form.value,
      type: 'number',
      placeholder: 'Ex.: 0,00',
    },
    {
      label: 'Categoria',
      name: 'category',
      value: form.category,
      type: 'select',
      optionsSelect: [{ option: 'Selecione', value: '' }, ...options],
    },
    {
      label: 'Data',
      name: 'date',
      value: form.date,
      placeholder: 'Ex.: 00/00/0000',
    },
    {
      label: 'Descrição',
      name: 'description',
      value: form.description,
    },
  ]

  return (
    <>
      <RegisterModal
        visible={visible}
        title="Adicionar Registro"
        closeHandler={() => setVisible(false)}
        onChange={(e: any) =>
          setForm((prev) => {
            if (e.target.name === 'value') {
              return {
                ...prev,
                [e.target.name]: Number(e.target.value.replace(/,/g, '.')),
              }
            }
            return { ...prev, [e.target.name]: e.target.value }
          })
        }
        inputs={inputs}
        registerType={form.type}
        onChangeType={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <BaseLayout hasLogoutButton={isAuthenticated}>
        <section className={styles.homeTemplate}>
          <div className={styles.optionsSection}>
            <button className={styles.btnOption}>
              <Image
                src={filterIcon}
                width={14}
                height={14}
                alt="Botão para abrir filtro"
              />
              <p>Filtrar</p>
            </button>
            <button
              className={styles.btnOption}
              onClick={() => setContainer('categories')}
            >
              <Image
                src={categoryIcon}
                width={14}
                height={14}
                alt="Botão para minhas categorias"
              />
              <p>Categorias</p>
            </button>
          </div>
          <section className={styles.main}>
            <TableRelease releases={releases} />
            <div>
              <Summary releases={releases} />
              <button
                className={styles.addButton}
                onClick={() => setVisible(true)}
              >
                Adicionar Registro
              </button>
            </div>
          </section>
        </section>
      </BaseLayout>
    </>
  )
}
