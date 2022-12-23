import { Dispatch, SetStateAction } from 'react'
import useWindowStorage from './useWindowStorage'

export default function useSessionStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  return useWindowStorage(window.sessionStorage, key, initialValue)
}