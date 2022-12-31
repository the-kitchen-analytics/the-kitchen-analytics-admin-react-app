import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'

export default class ProcedureConverter implements FirestoreDataConverter<Procedure> {

  toFirestore(receipt: Procedure): DocumentData {
    return {
      ...receipt
    }
  }

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Procedure {
    const data = snapshot.data(options)

    return {
      id: snapshot.id,
      name: data.name,
      price: data.price,
      workerIncome: data.workerIncome,
      type: data.type,
    } as Procedure
  }
}