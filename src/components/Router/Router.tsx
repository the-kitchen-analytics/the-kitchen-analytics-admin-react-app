import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Routes from '../../config/routes/routes'
import { UserSettingsContextProvider } from '../../context/UserSettingsContext'
import {
  Dashboard,
  Home,
  NoMatch,
  Procedures,
  Receipts,
  Settings,
  Users
} from '../../views'
import { MainLayout } from '../../layouts'

const Router = () => {

  const router = createBrowserRouter([
    {
      path: Routes.HOME,
      element: <MainLayout />,
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
          path: Routes.SETTINGS,
          element: <Settings />
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