import { useUserSettings } from '../../../hooks'
import { ButtonProps } from 'semantic-ui-react'
import StyledButton from './StyledButton'

type AccentButtonProps = {
  buttonProps: ButtonProps
}

export default function AccentButton(props: AccentButtonProps) {

  const { settings } = useUserSettings()

  return (
    <StyledButton
      buttonProps={{
        ...props.buttonProps,
        color: settings.accentColor
      }}
    />
  )
}