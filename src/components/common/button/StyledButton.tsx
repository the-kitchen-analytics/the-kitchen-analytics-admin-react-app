import { Button as SemanticButton, ButtonProps as SemanticButtonProps } from 'semantic-ui-react'
import { useUserSettings } from '../../../hooks'

type StyledButtonProps = {
  buttonProps: SemanticButtonProps
}

export default function StyledButton(props: StyledButtonProps) {

  const { settings } = useUserSettings()

  return (
    <SemanticButton
      size={settings.controlsSize}
      {...props.buttonProps}
    />
  )
}