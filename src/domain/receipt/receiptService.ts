import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import {db} from '../../config/firebaseConfig'
import {mapToModel} from './receiptMapper'

export interface IReceiptService {
  getAll(): Promise<Array<Receipt>>

  getById(id: string): Receipt

  save(payload: Receipt): void

  update(id: string, payload: Receipt): void

  deleteById(id: string): void
}

class ReceiptService {

  async getAll(): Promise<Array<Receipt>> {
    try {
      console.debug('ReceiptService.getAll')
      const snapshot = await getDocs(query(collection(db, 'receipts')))

      if (snapshot.empty) {
        return []
      }

      return snapshot.docs.map(mapToModel)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  // getById(id: string): Receipt {
  //   return {} as Receipt
  // }
  //
  // save(payload: Receipt): void {
  // }
  //
  // update(id: string, payload: Receipt): void {
  // }
  //
  // deleteById(id: string): void {
  // }

}

const receiptService = new ReceiptService()
export default receiptService

