import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'

export default class ReceiptConverter implements FirestoreDataConverter<Receipt> {

  toFirestore(receipt: Receipt): DocumentData {
    return {
      ...receipt
    }
  }

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Receipt {
    const data = snapshot.data(options)
    return {
      ...data
    } as Receipt
  }
}
