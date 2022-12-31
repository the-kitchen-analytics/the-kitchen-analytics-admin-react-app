import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import Worker from './Worker'

export default class WorkerConverter implements FirestoreDataConverter<Worker> {

  toFirestore(worker: Worker): DocumentData {
    return {
      ...worker
    }
  }

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Worker {
    const data = snapshot.data(options)

    return {
      id: snapshot.id,
      uid: data.string,
      name: data.name,
      email: data.email,
      workerCategory: data.workerCategory
    } as Worker
  }
}