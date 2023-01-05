import { useRouteError } from 'react-router'
import { HomeButton, ErrorMessage } from '../../components/common/'
import getErrorMessage from './getErrorMessage'

export default function ErrorPage() {

  const error = useRouteError()
  const errorMessage = getErrorMessage(error)

  return (
    <>
      <ErrorMessage
        icon={'exclamation circle'}
        header={'Произошла ошибка'}
        content={errorMessage}
      />

      <HomeButton />

    </>
  )
}