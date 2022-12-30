import { useNavigate } from 'react-router'
import { Button, ButtonProps } from 'semantic-ui-react'
import { useUserSettings } from '../../hooks'

type HomeButtonProps = ButtonProps

export default function HomeButton(props: HomeButtonProps) {

  const navigate = useNavigate()
  const { settings } = useUserSettings()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Button
      size={settings.controlsSize}
      content={'На главную'}
      onClick={handleClick}
      {...props}
    />
  )
}