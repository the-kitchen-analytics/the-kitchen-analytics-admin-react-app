import ReceiptConverter from './ReceiptConverter'
import ReceiptFirebaseService from './ReceiptFirebaseService'
import ReceiptService from './ReceiptService'

const receiptConverter = new ReceiptConverter()
const receiptFirebaseService = new ReceiptFirebaseService(receiptConverter)
const receiptService = new ReceiptService(receiptFirebaseService)

export {
  receiptService
}