import { ButtonProps } from 'semantic-ui-react'
import { LinkButton } from '../common'
import { ButtonType } from '../common/button/Button'

const WorkerEditButton = (props: ButtonProps) => (
  <LinkButton
    linkProps={{
      to: 'edit'
    }}
    buttonProps={{
      icon: 'edit',
      content: 'Редактировать',
      ...props
    }}
    type={ButtonType.ACCENT}
  />
)

export default WorkerEditButton