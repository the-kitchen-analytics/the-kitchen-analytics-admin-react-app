import { Link, LinkProps } from 'react-router-dom'
import { ButtonProps } from 'semantic-ui-react'
import Button, { ButtonType } from './Button'

type LinkButtonProps = {
  linkProps: LinkProps
  buttonProps: ButtonProps
  type?: ButtonType
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link {...props.linkProps}>
      <Button
        type={props.type}
        buttonProps={props.buttonProps}
      />
    </Link>
  )
}