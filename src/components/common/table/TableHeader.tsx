import { Table, TableHeaderCellProps } from 'semantic-ui-react'

interface TableHeaderProps {
  cells: TableHeaderCellProps[]
}

const TableHeader = (props: TableHeaderProps) => (
  <Table.Header>
    <Table.Row>
      {
        props.cells.map(cell => <Table.HeaderCell {...cell} key={cell.key} />)
      }
    </Table.Row>
  </Table.Header>
)

export default TableHeader