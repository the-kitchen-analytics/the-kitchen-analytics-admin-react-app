import {
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { pathNames, firestore } from '../../config/firebase'
import AbstractFirebaseService from '../common/AbstractFirebaseService'
import snapshotMapper from '../common/genericSnapshotMapper'

export default class ProcedureFirebaseService extends AbstractFirebaseService<Procedure> {

  constructor(converter: FirestoreDataConverter<Procedure>) {
    super(firestore, pathNames.RECEIPTS, converter)
  }

  async getAll(): Promise<Array<Procedure>> {
    const querySnapshot = await getDocs(super.collectionWrapper())

    return querySnapshot.docs.map(snapshotMapper)
  }

  async getById(id: string): Promise<Procedure> {
    const docRef = super.docWrapper(id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return snapshotMapper(docSnap)
    }

    throw new Error(`Not found procedure with id ${id}`)
  }

}