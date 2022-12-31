import { ViewLayout } from '../../layouts'
import { useLoaderData, useMatch } from 'react-router-dom'

export default function ReceiptEdit() {

  const match = useMatch('/receipts/:receiptId')
  const receiptId = match?.params.receiptId

  const receipt = useLoaderData()
  console.debug('receipt', receipt)

  return (
    <ViewLayout icon='checked calendar'
      header={`Запись #${receiptId}`}
      subheader='Управляйте записями в приложении'
      content={'content'}
    />
  )
}