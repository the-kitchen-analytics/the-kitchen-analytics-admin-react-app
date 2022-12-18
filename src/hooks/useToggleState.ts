import { useState } from 'react'

const useToggleState = (initialValue = false) => {
  const [state, setState] = useState(initialValue)

  return [
    state,
    () => setState(prevState => !prevState),
    setState,
  ]
}

export default useToggleState