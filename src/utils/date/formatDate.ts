
const formatDate = (date: Date) => {
  return [date.getDay(), date.getMonth(), date.getFullYear()].join('.')
}

export default formatDate