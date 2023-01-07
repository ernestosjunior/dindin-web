import React from 'react'
import { Modal as ModalComponent } from '@nextui-org/react'

export interface ModalProps {
  visible: boolean
  closeHandler?: () => void
  children?: React.ReactNode
  hasCloseButton?: boolean
  blur?: boolean
  preventClose?: boolean
}

export const Modal = ({
  visible,
  closeHandler,
  children,
  hasCloseButton = true,
  blur = false,
  preventClose = false,
}: ModalProps) => {
  return (
    <ModalComponent
      closeButton={hasCloseButton}
      open={visible}
      onClose={closeHandler}
      blur={blur}
      preventClose={preventClose}
      noPadding
    >
      {children}
    </ModalComponent>
  )
}
