import { Link, LinkProps, useMatch } from 'react-router-dom'
import { Menu, MenuItemProps } from 'semantic-ui-react'

interface NavigationBarItemProps {
  linkProps: LinkProps
  menuItemProps: MenuItemProps
}

const NavigationBarItem = (props: NavigationBarItemProps) => {

  const isActive = !!useMatch(props.linkProps.to.toString())

  return (
    <Link {...props.linkProps}>
      <Menu.Item
        {...props.menuItemProps}
        active={isActive}
      />
    </Link>
  )
}

export default NavigationBarItem