import { useContext } from 'react'
import { RootContext } from '../contexts/root'

export const useRoot = () => {
  const root = useContext(RootContext)

  return root
}
