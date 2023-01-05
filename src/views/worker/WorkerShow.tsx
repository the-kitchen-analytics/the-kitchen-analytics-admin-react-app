import { useLoaderData, useMatch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { ViewLayout } from '../../layouts'
import { BackButton, ButtonGroup } from '../../components/common'
import { WorkerEditButton } from '../../components/worker'
import Worker from '../../domain/worker/Worker'

export default function WorkerShow() {

  const match = useMatch('/workers/:workerId')
  const workerId = match?.params.workerId

  const data = useLoaderData() as Worker
  console.debug('worker', data)

  return (
    <ViewLayout icon={'users'}
      header={`Сотрудник #${workerId}`}
      subheader='Управляйте пользователями приложения'
    >
      <Grid.Row>
        <Grid.Column>

          <ButtonGroup
            buttons={[
              {
                Component: BackButton
              },
              {
                Component: WorkerEditButton
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </ViewLayout >
  )
}