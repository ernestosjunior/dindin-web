import { BaseLayout, TableRelease } from '../../components'
import filterIcon from '../../assets/filter.svg'
import Image from 'next/image'
import styles from './styles.module.css'
import { HomeProps } from '../../pages'
import { useRoot } from '../../hooks/useRoot'

interface HomeTemplateProps extends HomeProps {}

export function HomeTemplate({ releases }: HomeTemplateProps) {
  const { isAuthenticated } = useRoot()
  return (
    <BaseLayout hasLogoutButton={isAuthenticated}>
      <section className={styles.homeTemplate}>
        <button className={styles.btnFilter}>
          <Image
            src={filterIcon}
            width={14}
            height={14}
            alt="Botão para abrir filtro"
          />
          <p>Filtrar</p>
        </button>
        <TableRelease releases={releases} />
      </section>
    </BaseLayout>
  )
}
