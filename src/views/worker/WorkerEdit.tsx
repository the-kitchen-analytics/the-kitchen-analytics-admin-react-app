import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { BackButton, ButtonGroup } from '../../components/common'
import { WorkerEditForm, WorkerSaveButton } from '../../components/worker/'
import Worker from '../../domain/worker/Worker'

export default function WorkerEdit() {

  const match = useMatch('/workers/:workerId/edit')
  const workerId = match?.params.workerId

  const data = useLoaderData() as Worker
  console.debug('worker', data)

  return (
    <ViewLayout
      icon={'edit'}
      header={`Сотрудник #${workerId}`}
      subheader='Управляйте пользователями приложения'
    >
      <Grid.Row>
        <Grid.Column>
          <WorkerEditForm
            initalData={data}
          />
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