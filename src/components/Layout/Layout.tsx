import { Outlet, Link } from 'react-router-dom'
import Routes from '../../config/routes/routes'

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to={Routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={Routes.DASHBOARD}>Dashboard</Link>
        </li>
        <li>
          <Link to={Routes.PROCEDURES}>Procedures</Link>
        </li>
        <li>
          <Link to={Routes.RECEIPTS}>Receipts</Link>
        </li>
        <li>
          <Link to={Routes.USERS}>Users</Link>
        </li>
      </ul>
    </nav>

    <hr />

    <Outlet />
  </div>
)

export default Layout