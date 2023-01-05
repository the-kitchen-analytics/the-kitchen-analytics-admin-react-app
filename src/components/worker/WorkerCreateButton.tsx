import { ButtonProps } from 'semantic-ui-react'
import { LinkButton } from '../common'

const WorkerCreateButton = (props: ButtonProps) => (
  <LinkButton
    linkProps={{
      to: 'create'
    }}
    buttonProps={{
      icon: 'user plus',
      content: 'Добавить',
      ...props
    }}
  />
)

export default WorkerCreateButton