import firebase from 'firebase/compat'

const receiptConverter = {
  toFirestore(receipt: Receipt): firebase.firestore.DocumentData {
    return {
      ...receipt
    }
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Receipt {
    const data = snapshot.data(options)!
    return {
      ...data
    } as Receipt
  }
}

export default receiptConverter