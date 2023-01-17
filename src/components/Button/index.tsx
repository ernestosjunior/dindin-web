import styles from './styles.module.css'
import { ThreeDots } from 'react-loader-spinner'

export interface ButtonProps {
  isLoading?: boolean
  label: string
  onClick: any
  disabled: boolean
}

export const Button = ({
  isLoading,
  label,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={styles.buttonContainer}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {!isLoading ? (
        label
      ) : (
        <ThreeDots
          height="48"
          width="48"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible
        />
      )}
    </button>
  )
}
