import DomainFetchService from '../common/DomainFetchService'
import Worker from './Worker'

export default class WorkerService {

  domainFetchService: DomainFetchService<Worker>

  constructor(domainFetchService: DomainFetchService<Worker>) {
    this.domainFetchService = domainFetchService
  }

  async getAll(): Promise<Array<Worker>> {
    console.debug('WorkerService.getAll')
    return this.domainFetchService.getAll()
  }

  async getById(id: string): Promise<Worker> {
    console.debug('WorkerService.getById', id)
    return this.domainFetchService.getById(id)
  }

}

