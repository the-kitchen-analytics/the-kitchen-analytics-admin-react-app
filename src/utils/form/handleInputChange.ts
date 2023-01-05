import { Dispatch, SetStateAction } from 'react'

export default function handleInputChange<S>(
  e: React.ChangeEvent<HTMLInputElement>,
  setData: Dispatch<SetStateAction<S>>
) {
  console.debug('handleInputChange', e)
  setData(data => ({ ...data, [e.target.name]: e.target.value }))
}