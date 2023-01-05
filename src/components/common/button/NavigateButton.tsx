import { useNavigate } from 'react-router'
import { To, NavigateOptions } from 'react-router-dom'
import { ButtonProps } from 'semantic-ui-react'
import Button from './Button'

type NavigateButtonProps = {
  to: To,
  options?: NavigateOptions
  buttonProps: ButtonProps
}

export default function NavigateButton(props: NavigateButtonProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(props.to, props.options)
  }

  return (
    <Button
      buttonProps={{
        ...props.buttonProps,
        onClick: handleClick
      }}
    />
  )
}