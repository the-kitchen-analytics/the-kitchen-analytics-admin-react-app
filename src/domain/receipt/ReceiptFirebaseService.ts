import {
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import AbstractFirebaseService from '../common/AbstractFirebaseService'
import snapshotMapper from '../common/genericSnapshotMapper'

export default class ReceiptFirebaseService extends AbstractFirebaseService<Receipt> {

  constructor(converter: FirestoreDataConverter<Receipt>) {
    super(db, 'receipts', converter)
  }

  async getAll(): Promise<Array<Receipt>> {
    const querySnapshot = await getDocs(super.collectionWrapper())

    return querySnapshot.docs.map(snapshotMapper)
  }

  async getById(id: string): Promise<Receipt> {
    const docRef = super.docWrapper(id)
    const docSnap = await getDoc(docRef)

    return snapshotMapper(docSnap)
  }

}