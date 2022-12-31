import {
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { pathNames, firestore } from '../../config/firebase'
import AbstractFirebaseService from '../common/AbstractFirebaseService'
import snapshotMapper from '../common/genericSnapshotMapper'
import Receipt from './Receipt'

export default class ReceiptFirebaseService extends AbstractFirebaseService<Receipt> {

  constructor(converter: FirestoreDataConverter<Receipt>) {
    super(firestore, pathNames.RECEIPTS, converter)
  }

  async getAll(): Promise<Array<Receipt>> {
    const querySnapshot = await getDocs(super.collectionWrapper())

    return querySnapshot.docs.map(snapshotMapper)
  }

  async getById(id: string): Promise<Receipt> {
    const docRef = super.docWrapper(id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return snapshotMapper(docSnap)
    }

    throw new Error(`Not found receipt with id ${id}`)
  }

}