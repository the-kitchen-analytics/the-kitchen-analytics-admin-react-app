import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Routes from "../../config/routes/routes";
import { Dashboard, Home } from "../../views";

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={Routes.HOME}
        element={<Home />}
      >
        <Route
          path={Routes.DASHBOARD}
          element={<Dashboard />}
        />
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router;