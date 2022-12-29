interface Receipt {
  uid: string,
  date: Date,
  dateCreate: Date
  procedures: Array<Procedure>
}