import { useState, SetStateAction, Dispatch } from 'react'

export default function useWindowStorage<T>(windowStorage: Storage, key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof windowStorage === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = windowStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.error(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  function setValue(value: T | ((prevValue: T) => T)) {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof windowStorage !== 'undefined') {
        windowStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }

  return [storedValue as T, setValue]
}