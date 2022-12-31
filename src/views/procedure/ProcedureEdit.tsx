import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'

export default function ProcedureEdit() {

  const match = useMatch('/procedures/:procedureId')
  const procedureId = match?.params.procedureId

  const procedure = useLoaderData()
  console.debug('procedure', procedure)

  return (
    <ViewLayout icon='checked calendar'
      header={`Услуга #${procedureId}`}
      subheader='Управляйте записями в приложении'
      content={'content'}
    />
  )
}