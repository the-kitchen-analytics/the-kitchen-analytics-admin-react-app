import ProcedureConverter from './ProcedureConverter'
import ProcedureFirebaseService from './ProcedureFirebaseService'
import ProcedureService from './ProcedureService'

const procedureConverter = new ProcedureConverter()
const procedureFirebaseService = new ProcedureFirebaseService(procedureConverter)
const procedureService = new ProcedureService(procedureFirebaseService)

export {
  procedureService
}