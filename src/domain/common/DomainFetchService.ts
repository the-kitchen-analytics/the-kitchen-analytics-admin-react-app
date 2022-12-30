export default interface DomainFetchService<T> {

  getAll(): Promise<Array<T>>

  getById(id: string): Promise<T>

}