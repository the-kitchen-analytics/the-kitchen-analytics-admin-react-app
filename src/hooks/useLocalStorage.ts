import { Dispatch, SetStateAction } from 'react'
import useWindowStorage from './useWindowStorage'

export default function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  return useWindowStorage(window.localStorage, key, initialValue)
}
