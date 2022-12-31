import { Params } from 'react-router-dom'
import RoutePath from './RoutePath'
import ErrorPage from '../views/ErrorPage'
import { workerService } from '../domain/worker'
import { WorkerCreate, WorkerEdit, WorkerList, WorkerShow } from '../views/worker'

const getByIdLoader = ({ params }: { params: Params }) => workerService.getById(params.workerId as string)

const workerRoutes = {
  path: RoutePath.WORKERS,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <WorkerList />,
      loader: () => workerService.getAll()
    },
    {
      path: ':workerId',
      children: [
        {
          index: true,
          element: <WorkerShow />,
          loader: getByIdLoader
        },
        {
          path: 'edit',
          element: <WorkerEdit />,
          loader: getByIdLoader
        },
        {
          path: 'delete'
        }
      ]
    },
    {
      path: 'create',
      element: <WorkerCreate />
    }
  ]
}

export default workerRoutes