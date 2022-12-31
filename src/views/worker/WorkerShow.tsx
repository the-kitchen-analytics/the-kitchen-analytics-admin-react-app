import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'

export default function WorkerShow() {

  const match = useMatch('/workers/:workerId')
  const workerId = match?.params.workerId

  const data = useLoaderData()
  console.debug('worker', data)

  return (
    <ViewLayout icon={'users'}
      header={`Сотрудник #${workerId}`}
      subheader='Управляйте пользователями приложения'
      content={'content'}
    />
  )
}