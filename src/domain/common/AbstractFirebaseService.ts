import { FirestoreDataConverter, collection, doc, Firestore } from 'firebase/firestore'
import DomainFetchService from './DomainFetchService'

export default abstract class AbstractFirebaseService<T> implements DomainFetchService<T> {

  firestore: Firestore
  path: string
  converter: FirestoreDataConverter<T>

  constructor(firestore: Firestore, path: string, converter: FirestoreDataConverter<T>) {
    this.firestore = firestore
    this.path = path
    this.converter = converter
  }

  collectionWrapper() {
    return collection(this.firestore, this.path).withConverter(this.converter)
  }

  docWrapper(id: string) {
    return doc(this.firestore, this.path, id).withConverter(this.converter)
  }

  abstract getAll(): Promise<Array<T>>
  abstract getById(id: string): Promise<T>
}