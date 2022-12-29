import { ViewLayout } from '../../layouts'
import {useLoaderData} from 'react-router-dom'

export default function Receipts() {

  const data = useLoaderData()

  console.debug(data)

  return (
    <ViewLayout icon='checked calendar'
      header='Записи'
      subheader='Управляйте записями в приложении'
      content={'content'}
    />
  )
}