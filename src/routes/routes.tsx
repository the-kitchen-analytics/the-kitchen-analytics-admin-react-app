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
import RoutePath from './RoutePath';

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
        element: <Receipts />
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

export default routes;