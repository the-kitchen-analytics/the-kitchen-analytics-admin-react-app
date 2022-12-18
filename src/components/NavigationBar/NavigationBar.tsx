import { Menu } from 'semantic-ui-react';
import Routes from '../../config/routes/routes';
import Logo from '../Logo';
import NavigationBarItem from './NavigationBarItem';
// import { createNavigationBarElement } from '../../utils/ui/navigationBar';
// import Logo from '../Logo';

interface NavigationBarProps {
  title: React.ReactNode
}

const NavigationBar = (props: NavigationBarProps) => {

  // const { settings: { accentColor } } = useUserSettings();

  return (
    <Menu
      text
      fluid
      defaultActiveIndex={0}
      vertical
      size='massive'
    // color={accentColor || 'black'}
    >
      <Menu.Item>
        <Logo avatar /> {props.title}
      </Menu.Item>

      <NavigationBarItem
        linkProps={{ to: Routes.HOME }}
        menuItemProps={{
          content: 'Главная'
        }}
      />

      <NavigationBarItem
        linkProps={{ to: Routes.DASHBOARD }}
        menuItemProps={{
          content: 'Dashboard'
        }}
      />

      <NavigationBarItem
        linkProps={{ to: Routes.PROCEDURES }}
        menuItemProps={{
          content: 'Процедуры'
        }}
      />

      <NavigationBarItem
        linkProps={{ to: Routes.RECEIPTS }}
        menuItemProps={{
          content: 'Записи'
        }}
      />

      <NavigationBarItem
        linkProps={{ to: Routes.USERS }}
        menuItemProps={{
          content: 'Пользователи'
        }}
      />

    </Menu>
  )
}

export default NavigationBar;