import useWindowStorage from './useWindowStorage'

export default function useLocalStorage<T>(key: string, initialValue: T) {
  return useWindowStorage(window.localStorage, key, initialValue)
}
