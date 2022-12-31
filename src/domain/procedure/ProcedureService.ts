import DomainFetchService from '../common/DomainFetchService'

export default class ProcedureService {

  domainFetchService: DomainFetchService<Procedure>

  constructor(domainFetchService: DomainFetchService<Procedure>) {
    this.domainFetchService = domainFetchService
  }

  async getAll(): Promise<Array<Procedure>> {
    console.debug('ProcedureService.getAll')
    return this.domainFetchService.getAll()
  }

  async getById(id: string): Promise<Procedure> {
    console.debug('ProcedureService.getById', id)
    return this.domainFetchService.getById(id)
  }

}

