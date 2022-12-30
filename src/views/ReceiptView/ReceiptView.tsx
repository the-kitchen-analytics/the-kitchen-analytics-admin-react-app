import {ViewLayout} from '../../layouts'
import {useMatch} from 'react-router-dom'

export default function ReceiptView() {

  const match = useMatch('/receipts/:receiptId')
  const receiptId = match?.params.receiptId

  return (
    <ViewLayout icon='checked calendar'
      header={`Запись #${receiptId}`}
      subheader='Управляйте записями в приложении'
      content={'content'}
    />
  )
}