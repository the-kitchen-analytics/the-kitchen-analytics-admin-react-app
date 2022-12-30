interface Receipt {
  id: string,
  uid: string,
  date: Date,
  dateCreate: Date
  procedures: Array<Procedure>
}
