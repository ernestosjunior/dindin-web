import styles from './styles.module.css'

export interface InputProps extends Partial<HTMLInputElement> {
  onChange: any
  label?: string
  placeholder?: string
  optionsSelect?: { option: string; value: '' }[]
}

export const Input = ({
  type,
  onChange,
  label,
  value,
  name,
  placeholder,
  optionsSelect = [],
}: InputProps) => {
  if (type === 'select')
    return (
      <label className={styles.label}>
        {label}
        <select className={styles.selectInput} onChange={onChange} name={name}>
          {optionsSelect.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={value === option.value}
            >
              {option.option}
            </option>
          ))}
        </select>
      </label>
    )

  return (
    <label className={styles.label}>
      {label}
      <input
        autoComplete="no"
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        min="0"
        placeholder={placeholder}
      />
    </label>
  )
}
