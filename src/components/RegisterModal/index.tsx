import React from 'react'
import { Modal } from '../Modal'
import { Input } from '../Input'
import styles from './styles.module.css'

interface RegisterModalProps {
  visible: boolean
  title: string
  closeHandler: () => void
  registerType?: string
  inputs: {
    label: string
    name: string
    value: string
    optionsSelect?: { option: string; value: '' }[]
  }[]
  onChangeType?: (key: string) => void
  onChange: (e: any) => void
  hideButtonsType?: boolean
  onSubmit?: () => void
  loading?: boolean
}

export const RegisterModal = ({
  visible,
  title,
  closeHandler,
  registerType = 'entrance',
  onChangeType = () => {},
  inputs,
  onChange,
  hideButtonsType = false,
  onSubmit,
  loading,
}: RegisterModalProps) => {
  const [type, setType] = React.useState(registerType)

  return (
    <Modal visible={visible} closeHandler={closeHandler}>
      <section className={styles.modalChildren}>
        <h1 className={styles.title}>{title}</h1>
        {!hideButtonsType && (
          <div className={styles.buttons}>
            <button
              onClick={() => {
                onChangeType('entrance')
                setType('entrance')
              }}
              className={
                type === 'entrance'
                  ? styles.entranceButton
                  : styles.buttonUnselectedLeft
              }
            >
              Entrada
            </button>
            <button
              onClick={() => {
                onChangeType('exit')
                setType('exit')
              }}
              className={
                type === 'exit'
                  ? styles.exitButton
                  : styles.buttonUnselectedRight
              }
            >
              Saída
            </button>
          </div>
        )}
        <div className={styles.form}>
          {inputs.map((props) => (
            <Input key={props.name} {...props} onChange={onChange} />
          ))}
        </div>
        <button
          className={styles.confirmButton}
          onClick={onSubmit}
          disabled={loading}
        >
          Confirmar
        </button>
      </section>
    </Modal>
  )
}
