import _ from 'lodash'
import { useState } from 'react'

const useTouched = (handleChange: Function) => {
  const [isTouched, setIsTouched] = useState(false)

  const handleInputChangeWrapper = (...args: any) => {
    setIsTouched(true)

    if (_.isFunction(handleChange)) {
      handleChange(...args)
    }
  }

  return {
    isTouched, handleInputChangeWrapper
  }
}

export default useTouched