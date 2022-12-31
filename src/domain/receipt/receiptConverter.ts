import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import Receipt from './Receipt'

export default class ReceiptConverter implements FirestoreDataConverter<Receipt> {

  toFirestore(receipt: Receipt): DocumentData {
    return {
      ...receipt
    }
  }

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Receipt {
    const data = snapshot.data(options)

    return {
      id: snapshot.id,
      date: data.date.toDate(),
    } as Receipt
  }
}