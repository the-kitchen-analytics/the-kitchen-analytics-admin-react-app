import {
  Dashboard,
  Home,
  NoMatch,
  Procedures,
  Receipts,
  Settings,
  Users
} from '../views'
import { MainLayout } from '../layouts'
import RoutePath from './RoutePath'
import ReceiptView from '../views/ReceiptView'
import { receiptService } from '../domain/receipt'
import { Params } from 'react-router-dom'
import ErrorPage from '../views/ErrorPage'

const routes = [
  {
    path: RoutePath.HOME,
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: RoutePath.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: RoutePath.PROCEDURES,
        element: <Procedures />
      },
      {
        path: RoutePath.RECEIPTS,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Receipts />,
            loader: () => receiptService.getAll()
          },
          {
            path: ':receiptId',
            children: [
              {
                index: true,
                element: <ReceiptView />,
                loader: ({ params }: { params: Params }) => receiptService.getById(params.receiptId as string)
              },
              {
                path: 'edit'
              },
              {
                path: 'delete'
              }
            ]
          },
          {
            path: 'create'
          }
        ]
      },
      {
        path: RoutePath.SETTINGS,
        element: <Settings />
      },
      {
        path: RoutePath.USERS,
        element: <Users />
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
]

export default routes