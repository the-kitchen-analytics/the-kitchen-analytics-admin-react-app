import { ViewLayout } from '../../layouts'
import { useLoaderData } from 'react-router-dom'
import ReceiptTable from '../../components/ReceiptTable'

export default function Receipts() {

  const receipts = useLoaderData() as Receipt[]

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