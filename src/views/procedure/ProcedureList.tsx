import { useLoaderData } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { BackButton } from '../../components/common'
import { ViewLayout } from '../../layouts'

export default function ProcedureList() {

  const procedures = useLoaderData()
  console.debug('procedures', procedures)

  return (
    <ViewLayout icon='tags'
      header='Услуги'
      subheader='Управляйте услугами в приложении'
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