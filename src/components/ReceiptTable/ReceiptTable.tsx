import { Table } from 'semantic-ui-react'

interface ReceiptTableProps {
  receipts: Array<Receipt>
}

const headerCells = [
  {
    key: 'date',
    content: 'Дата'
  }
]

export default function ReceiptTable(props: ReceiptTableProps) {
  return (
    <Table>
      <Table.Header>
        {
          headerCells.map(cell => <Table.HeaderCell {...cell} key={cell.key} />)
        }
      </Table.Header>

      <Table.Body>
        {
          props.receipts.map(receipt => (
            <Table.Row key={receipt.id}>
              <Table.Cell
                content={receipt.date.toISOString()}
              />
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}