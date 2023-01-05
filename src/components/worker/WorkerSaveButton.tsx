import { ButtonProps } from 'semantic-ui-react'
import { AccentButton } from '../common'

const WorkerSaveButton = (props: ButtonProps) => (
  <AccentButton
    buttonProps={{
      icon: 'save',
      content: 'Сохранить',
      ...props
    }}
  />
)

export default WorkerSaveButton
