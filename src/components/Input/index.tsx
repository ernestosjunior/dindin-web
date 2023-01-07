import * as S from './styles'

export interface InputProps extends Partial<HTMLInputElement> {
  onChange: any
  label?: string
}

export const Input = ({ type, onChange, label, value, name }: InputProps) => {
  return (
    <S.Label>
      {label}
      <S.Input type={type} onChange={onChange} value={value} name={name} />
    </S.Label>
  )
}
