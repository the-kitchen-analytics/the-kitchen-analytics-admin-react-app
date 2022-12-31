import { Params } from 'react-router-dom'
import RoutePath from './RoutePath'
import ErrorPage from '../views/ErrorPage'
import { procedureService } from '../domain/procedure'
import { ProcedureCreate, ProcedureEdit, ProcedureList, ProcedureShow } from '../views/procedure'

const getByIdLoader = ({ params }: { params: Params }) => procedureService.getById(params.procedureId as string)

const procedureRoutes = {
  path: RoutePath.PROCEDURES,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <ProcedureList />,
      loader: () => procedureService.getAll()
    },
    {
      path: ':procedureId',
      children: [
        {
          index: true,
          element: <ProcedureShow />,
          loader: getByIdLoader
        },
        {
          path: 'edit',
          element: <ProcedureEdit />,
          loader: getByIdLoader
        },
        {
          path: 'delete'
        }
      ]
    },
    {
      path: 'create',
      element: <ProcedureCreate />
    }
  ]
}

export default procedureRoutes