import { DocumentSnapshot } from 'firebase/firestore'

export default function snapshotMapper<T>(snapshot: DocumentSnapshot<T>): T {
  return {
    ...snapshot.data(),
    id: snapshot.id
  } as T
}