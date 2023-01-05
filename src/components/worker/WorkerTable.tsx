import { Link } from 'react-router-dom'
import Worker from '../../domain/worker/Worker'
import { Email, GenericTable } from '../common'

type WorkerTableProps = {
  data: Worker[]
}

export default function WorkerTable(props: WorkerTableProps) {

  const getHeaderCells = () => [
    {
      key: 'name',
      content: 'Имя'
    },
    {
      key: 'category',
      content: 'Категория'
    },
    {
      key: 'email',
      icon: 'at',
      content: 'E-mail'
    }
  ]

  const getBodyCells = (worker: Worker) => {
    return [
      {
        content: <Link to={worker.id}>{worker.name}</Link>
      },
      {
        content: worker.workerCategory
      },
      {
        content: <Email to={worker.email} />
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