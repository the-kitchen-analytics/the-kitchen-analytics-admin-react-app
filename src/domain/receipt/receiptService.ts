import DomainFetchService from '../common/DomainFetchService'

export default class ReceiptService {

  domainFetchService: DomainFetchService<Receipt>

  constructor(domainFetchService: DomainFetchService<Receipt>) {
    this.domainFetchService = domainFetchService
  }

  async getAll(): Promise<Array<Receipt>> {
    console.debug('ReceiptService.getAll')
    return this.domainFetchService.getAll()
  }

  async getById(id: string): Promise<Receipt> {
    console.debug('ReceiptService.getById', id)
    return this.domainFetchService.getById(id)
  }

}

