import { ViewLayout } from '../../layouts'
import { useLoaderData } from 'react-router-dom'
import ReceiptTable from '../../components/ReceiptTable'
import Receipt from '../../domain/receipt/Receipt'
import { Grid } from 'semantic-ui-react'
import { LinkButton } from '../../components/common'

export default function ReceiptList() {

  const receipts = useLoaderData() as Array<Receipt>
  console.debug('receipts', receipts)

  return (
    <ViewLayout icon='checked calendar'
      header='Записи'
      subheader='Управляйте записями в приложении'
    >
      <Grid.Row>
        <Grid.Column>
          <LinkButton
            linkProps={{
              to: 'create'
            }}
            buttonProps={{
              icon: 'calendar plus',
              content: 'Добавить'
            }}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ReceiptTable
            data={receipts}
          />
        </Grid.Column>
      </Grid.Row>
    </ViewLayout>
  )
}