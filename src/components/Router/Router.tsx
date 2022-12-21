import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { UserSettingsContextProvider } from '../../context/UserSettingsContext'
import routes from '../../routes/routes'

const Router = () => {

  const router = createBrowserRouter(routes)

  return (
    <>
      <UserSettingsContextProvider>
        <RouterProvider router={router} />
      </UserSettingsContextProvider>
    </>
  )
}

export default Router