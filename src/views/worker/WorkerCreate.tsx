import { Grid } from 'semantic-ui-react'
import { BackButton, ButtonGroup } from '../../components/common'
import { WorkerCreateForm, WorkerSaveButton } from '../../components/worker'
import { ViewLayout } from '../../layouts'

export default function WorkerCreate() {

  return (
    <ViewLayout icon={'users'}
      header={'Добавить сотрудника'}
      subheader='Управляйте пользователями приложения'
    >
      <Grid.Row>
        <Grid.Column>
          <WorkerCreateForm />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ButtonGroup
            buttons={[
              {
                Component: BackButton
              },
              {
                Component: WorkerSaveButton
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </ViewLayout>
  )
}