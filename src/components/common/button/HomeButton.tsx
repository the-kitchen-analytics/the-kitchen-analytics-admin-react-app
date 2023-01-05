import { ButtonProps } from 'semantic-ui-react'
import NavigateButton from './NavigateButton'

type HomeButtonProps = ButtonProps

export default function HomeButton(props: HomeButtonProps) {
  return (
    <NavigateButton
      to={'/'}
      buttonProps={{
        icon: 'home',
        content: 'На главную',
        ...props
      }}
    />
  )
}