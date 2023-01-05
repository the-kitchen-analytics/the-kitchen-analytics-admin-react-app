import { useNavigate } from 'react-router'
import { ButtonProps } from 'semantic-ui-react'
import Button from './Button'

type BackButtonProps = ButtonProps

export default function BackButton(props: BackButtonProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <Button
      buttonProps={{
        icon: 'arrow left',
        content: 'Назад',
        onClick: handleClick,
        ...props
      }}
    />
  )
}