import { Params } from 'react-router-dom'
import RoutePath from './RoutePath'
import ErrorPage from '../views/ErrorPage'
import { receiptService } from '../domain/receipt'
import { ReceiptCreate, ReceiptEdit, ReceiptList, ReceiptShow } from '../views/receipt'

const getByIdLoader = ({ params }: { params: Params }) => receiptService.getById(params.receiptId as string)

const receiptRoutes = {
  path: RoutePath.RECEIPTS,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <ReceiptList />,
      loader: () => receiptService.getAll()
    },
    {
      path: ':receiptId',
      children: [
        {
          index: true,
          element: <ReceiptShow />,
          loader: getByIdLoader
        },
        {
          path: 'edit',
          element: <ReceiptEdit />,
          loader: getByIdLoader
        },
        {
          path: 'delete'
        }
      ]
    },
    {
      path: 'create',
      element: <ReceiptCreate />
    }
  ]
}

export default receiptRoutes