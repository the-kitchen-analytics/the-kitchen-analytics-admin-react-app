import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { BackButton } from '../../components/common'

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
    >
      <Grid.Row>
        <Grid.Column>
          content
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <BackButton />
        </Grid.Column>
      </Grid.Row>
    </ViewLayout>
  )
}