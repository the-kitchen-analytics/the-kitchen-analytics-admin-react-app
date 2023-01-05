import { useLoaderData } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ViewLayout } from '../../layouts'
import { WorkerCreateButton, WorkerTable } from '../../components/worker'
import Worker from '../../domain/worker/Worker'
import { ButtonGroup } from '../../components/common'

export default function WorkerList() {

  const data = useLoaderData() as Worker[]
  console.debug('workers', data)

  return (
    <ViewLayout icon='users'
      header='Сотрудники'
      subheader='Управляйте пользователями приложения'
    >
      <Grid.Row>
        <Grid.Column>
          <WorkerTable
            data={data}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ButtonGroup
            buttons={[
              {
                Component: WorkerCreateButton
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </ViewLayout>
  )
}