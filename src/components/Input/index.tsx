import styles from './styles.module.css'

export interface InputProps extends Partial<HTMLInputElement> {
  onChange: any
  label?: string
}

export const Input = ({ type, onChange, label, value, name }: InputProps) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
      />
    </label>
  )
}
