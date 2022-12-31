import WorkerConverter from './WorkerConverter'
import WorkerFirebaseService from './WorkerFirebaseService'
import WorkerService from './WorkerService'

const workerConverter = new WorkerConverter()
const workerFirebaseService = new WorkerFirebaseService(workerConverter)
const workerService = new WorkerService(workerFirebaseService)

export {
  workerService
}