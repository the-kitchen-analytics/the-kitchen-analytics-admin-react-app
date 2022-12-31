import {
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from 'firebase/firestore'
import { pathNames, firestore } from '../../config/firebase'
import AbstractFirebaseService from '../common/AbstractFirebaseService'
import snapshotMapper from '../common/genericSnapshotMapper'
import Worker from './Worker'

export default class WorkerFirebaseService extends AbstractFirebaseService<Worker> {

  constructor(converter: FirestoreDataConverter<Worker>) {
    super(firestore, pathNames.WORKERS, converter)
  }

  async getAll(): Promise<Array<Worker>> {
    const querySnapshot = await getDocs(super.collectionWrapper())

    return querySnapshot.docs.map(snapshotMapper)
  }

  async getById(id: string): Promise<Worker> {
    const docRef = super.docWrapper(id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return snapshotMapper(docSnap)
    }

    throw new Error(`Not found worker with id ${id}`)
  }

}