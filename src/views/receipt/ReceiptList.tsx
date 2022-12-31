import { ViewLayout } from '../../layouts'
import { useLoaderData } from 'react-router-dom'
import ReceiptTable from '../../components/ReceiptTable'
import Receipt from '../../domain/receipt/Receipt'

export default function ReceiptList() {

  const receipts = useLoaderData() as Array<Receipt>
  console.debug('receipts', receipts)

  return (
    <ViewLayout icon='checked calendar'
      header='Записи'
      subheader='Управляйте записями в приложении'
    >

      <ReceiptTable
        receipts={receipts}
      />

    </ViewLayout>
  )
}