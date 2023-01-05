import { Grid } from 'semantic-ui-react'
import { BackButton } from '../../components/common'
import { ViewLayout } from '../../layouts'

export default function ReceiptCreate() {

  return (
    <ViewLayout icon='checked calendar'
      header={'Сохранить запись'}
      subheader='Управляйте записями в приложении'
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