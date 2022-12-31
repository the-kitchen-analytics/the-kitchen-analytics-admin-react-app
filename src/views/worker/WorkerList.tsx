import { ViewLayout } from '../../layouts'
import { useLoaderData } from 'react-router-dom'

export default function WorkerList() {

  const data = useLoaderData()
  console.debug('workers', data)

  return (
    <ViewLayout icon='users'
      header='Сотрудники'
      subheader='Управляйте пользователями приложения'
      content={'content'}
    />
  )
}