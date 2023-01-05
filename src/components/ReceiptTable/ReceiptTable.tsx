import Receipt from '../../domain/receipt/Receipt'
import { formatDate } from '../../utils/date'
import { GenericTable } from '../common'

type ReceiptTableProps = {
  data: Receipt[]
}

export default function ReceiptTable(props: ReceiptTableProps) {

  const getHeaderCells = () => [
    {
      key: 'date',
      content: 'Дата'
    },
    {
      key: 'worker',
      content: 'Мастер'
    },
    {
      key: 'procedures',
      content: 'Услуги'
    },
    {
      key: 'price',
      content: 'Стоимость'
    }
  ]

  const getBodyCells = (receipt: Receipt) => {
    return [
      {
        content: formatDate(receipt.date)
      },
      {
        content: ''
      },
      {
        content: ''
      },
      {
        content: ''
      }
    ]
  }

  return (
    <GenericTable
      rows={props.data}
      getHeaderCells={getHeaderCells}
      getBodyCells={getBodyCells}
    />
  )
}