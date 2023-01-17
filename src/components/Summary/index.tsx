import styles from './styles.module.css'

interface SummaryProps {
  releases: any[]
}

export const Summary = ({ releases = [] }: SummaryProps) => {
  const totalEntrances = releases
    .map((release) => (/entrance/i.test(release.type) ? release.value : 0))
    .reduce((acc, curr) => acc + curr, 0)
  const totalExits = releases
    .map((release) => (/exit/i.test(release.type) ? release.value : 0))
    .reduce((acc, curr) => acc + curr, 0)

  return (
    <article className={styles.summary}>
      <h1>Resumo</h1>
      <div>
        <section className={styles.top}>
          <span className={styles.valueCard}>
            <p className={styles.label}>Entradas</p>
            <p className={styles.entranceLabel}>
              {totalEntrances?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </span>
          <span className={styles.valueCard}>
            <p className={styles.label}>Saídas</p>
            <p className={styles.exitLabel}>
              {totalExits?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </span>
        </section>
        <hr />
        <span className={styles.valueCard}>
          <p className={styles.balanceLabel}>Saldo</p>
          <p className={styles.balance}>
            {(totalEntrances - totalExits)?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </span>
      </div>
    </article>
  )
}
