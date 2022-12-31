import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import Receipt from '../../domain/receipt/Receipt'
import { formatDate } from '../../utils/date'

interface ReceiptTableProps {
  receipts: Array<Receipt>
}

const headerCells = [
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

export default function ReceiptTable(props: ReceiptTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {
            headerCells.map(cell => <Table.HeaderCell {...cell} key={cell.key} />)
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          props.receipts.map(receipt => (
            <Table.Row key={receipt.id}>
              <Table.Cell>
                <Link to={receipt.id}>{formatDate(receipt.date)}</Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}