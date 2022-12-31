import { MainLayout } from '../layouts'
import RoutePath from './RoutePath'
import ErrorPage from '../views/ErrorPage'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import NoMatch from '../views/NoMatch'
import Settings from '../views/Settings'
import receiptRoutes from './receiptRoutes'
import procedureRoutes from './procedureRoutes'
import workerRoutes from './workerRoutes'

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
        ...procedureRoutes
      },
      {
        ...receiptRoutes
      },
      {
        ...workerRoutes
      },
      {
        path: RoutePath.SETTINGS,
        element: <Settings />
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
]

export default routes