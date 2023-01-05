import { Table, TableHeaderCellProps, TableCellProps } from 'semantic-ui-react'

interface Row {
  id: string
  key?: string
}

interface GenericTableProps<T extends Row> {
  rows: T[]
  getHeaderCells: () => TableHeaderCellProps[]
  getBodyCells: (row: T) => TableCellProps[]
}

export default function GenericTable<T extends Row>(props: GenericTableProps<T>) {

  const buildHeaderKey = (i: number) => {
    return `tr-th-${i}`
  }

  const buildBodyCellKey = (row: T, i: number) => {
    return `tr-td-${row.id}-${i}`
  }

  const renderHeaderCells = () => props.getHeaderCells()
    .map((cell, i) => (
      <Table.HeaderCell
        {...cell}
        key={cell.key || buildHeaderKey(i)}
      />
    ))

  const renderBodyCells = (row: T) => props.getBodyCells(row)
    .map((cell, i) => (
      <Table.Cell
        {...cell}
        key={cell.key || buildBodyCellKey(row, i)}
      />
    ))

  return (
    <Table
      celled
      striped
      selectable
    >
      <Table.Header>
        <Table.Row>
          {
            renderHeaderCells()
          }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          props.rows.map(row => (
            <Table.Row
              key={row.id || row.key}
            >
              {
                renderBodyCells(row)
              }
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}