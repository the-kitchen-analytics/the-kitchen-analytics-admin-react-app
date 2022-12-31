import { useLoaderData } from 'react-router-dom'
import { ViewLayout } from '../../layouts'

export default function ProcedureList() {

  const procedures = useLoaderData()
  console.debug('procedures', procedures)

  return (
    <ViewLayout icon='tags'
      header='Услуги'
      subheader='Управляйте услугами в приложении'
      content={'content'}
    />
  )
}