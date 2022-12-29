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
import receiptService  from '../domain/receipt/receiptService'

const routes = [
  {
    path: RoutePath.HOME,
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