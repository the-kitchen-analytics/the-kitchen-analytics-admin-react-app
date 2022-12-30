import { useRouteError } from 'react-router'
import { Message } from 'semantic-ui-react'
import HomeButton from '../../components/HomeButton'
import getErrorMessage from './getErrorMessage'

export default function ErrorPage() {

  const error = useRouteError()
  const errorMessage = getErrorMessage(error)

  return (
    <>
      <Message
        error
        icon={'exclamation circle'}
        header={'Произошла ошибка'}
        content={errorMessage}
      />

      <HomeButton />

    </>
  )
}