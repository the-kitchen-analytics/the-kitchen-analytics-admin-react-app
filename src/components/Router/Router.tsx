import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Routes from '../../config/routes/routes'
import { UserSettingsContextProvider } from '../../context/UserSettingsContext'
import { Dashboard, Home } from '../../views'
import NoMatch from '../../views/NoMatch'
import Procedures from '../../views/Procedures'
import Receipts from '../../views/Receipts'
import Users from '../../views/Users'
import Layout from '../Layout'

const Router = () => {

  const router = createBrowserRouter([
    {
      path: Routes.HOME,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: Routes.DASHBOARD,
          element: <Dashboard />,
        },
        {
          path: Routes.PROCEDURES,
          element: <Procedures />
        },
        {
          path: Routes.RECEIPTS,
          element: <Receipts />
        },
        {
          path: Routes.USERS,
          element: <Users />
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ])

  return (
    <>
      <UserSettingsContextProvider>
        <RouterProvider router={router} />
      </UserSettingsContextProvider>
    </>
  )
}

export default Router