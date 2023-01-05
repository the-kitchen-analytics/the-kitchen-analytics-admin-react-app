import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

export default function ReceiptShow() {

  const match = useMatch('/receipts/:receiptId')
  const receiptId = match?.params.receiptId

  const receipt = useLoaderData()
  console.debug('receipt', receipt)

  return (
    <ViewLayout icon='checked calendar'
      header={`Запись #${receiptId}`}
      subheader='Управляйте записями в приложении'
    >
      <Grid.Row>
        <Grid.Column>
          content
        </Grid.Column>
      </Grid.Row>
    </ViewLayout>
  )
}