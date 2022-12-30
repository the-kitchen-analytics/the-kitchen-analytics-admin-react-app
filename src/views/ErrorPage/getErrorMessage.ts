import { isRouteErrorResponse } from 'react-router'

export default function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return 'This page doesn\'t exist!'
    }

    if (error.status === 401) {
      return 'You aren\'t authorized to see this'
    }

    if (error.status === 503) {
      return 'Looks like our API is down'
    }

    if (error.status === 418) {
      return '🫖'
    }
  }

  if (error instanceof Error) {
    return `${error.name}: ${error.message}`
  }

  return 'Something went wrong'
}