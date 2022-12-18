import { Menu } from 'semantic-ui-react'
import Routes from '../../config/routes/routes'
import Logo from '../Logo'
import NavigationBarItem from './NavigationBarItem'
import { useUserSettings } from '../../hooks'

interface NavigationBarProps {
  title: React.ReactNode
}

const NavigationBar = (props: NavigationBarProps) => {

  const { settings: { accentColor } } = useUserSettings()

  return (
    <Menu
      fluid
      defaultActiveIndex={0}
      vertical
      size='massive'
      color={(accentColor || 'black')}
    >
      <Menu.Item>
        <Logo avatar /> {props.title}
      </Menu.Item>

      <Menu.Item>
        <Menu.Header
          content='Главная'
        />

        <Menu.Menu>
          <NavigationBarItem
            linkProps={{ to: Routes.RECEIPTS }}
            menuItemProps={{
              icon: 'checked calendar',
              content: 'Записи'
            }}
          />

          <NavigationBarItem
            linkProps={{ to: Routes.PROCEDURES }}
            menuItemProps={{
              icon: 'tag',
              content: 'Услуги'
            }}
          />

          <NavigationBarItem
            linkProps={{ to: Routes.USERS }}
            menuItemProps={{
              icon: 'users',
              content: 'Сотрудники'
            }}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header
          content='Ещё'
        />

        <Menu.Menu>
          <NavigationBarItem
            linkProps={{ to: Routes.SETTINGS }}
            menuItemProps={{
              icon: 'setting',
              content: 'Настройки'
            }}
          />
        </Menu.Menu>
      </Menu.Item>

    </Menu>
  )
}

export default NavigationBar