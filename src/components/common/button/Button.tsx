import { ButtonProps as SemanticButtonProps } from 'semantic-ui-react'
import AccentButton from './AccentButton'
import StyledButton from './StyledButton'

export enum ButtonType {
  ACCENT,
  DEFAULT
}

type ButtonProps = {
  buttonProps: SemanticButtonProps
  type?: ButtonType
}

export default function Button(props: ButtonProps) {

  switch (props.type) {
    case ButtonType.ACCENT:
      return (
        <AccentButton
          buttonProps={props.buttonProps}
        />
      )
    default:
      return (
        <StyledButton
          buttonProps={props.buttonProps}
        />
      )
  }
}