export default interface Receipt {
  id: string,
  uid: string,
  worker: unknown,
  date: Date,
  dateCreate: Date
  procedures: Array<Procedure>
}