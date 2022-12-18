import useWindowStorage from './useWindowStorage'

const useSessionStorage = (key: string, initialValue: any) => {
  return useWindowStorage(window.sessionStorage, key, initialValue)
}

export default useSessionStorage