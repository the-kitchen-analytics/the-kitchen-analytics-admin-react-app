import logo from '../../assets/images/logo.svg'
import logo_black from '../../assets/images/logo-black.svg'
import logo_blue from '../../assets/images/logo-blue.svg'
import logo_brown from '../../assets/images/logo-brown.svg'
import logo_green from '../../assets/images/logo-green.svg'
import logo_grey from '../../assets/images/logo-grey.svg'
import logo_olive from '../../assets/images/logo-olive.svg'
import logo_orange from '../../assets/images/logo-orange.svg'
import logo_pink from '../../assets/images/logo-pink.svg'
import logo_purple from '../../assets/images/logo-purple.svg'
import logo_red from '../../assets/images/logo-red.svg'
import logo_teal from '../../assets/images/logo-teal.svg'
import logo_violet from '../../assets/images/logo-violet.svg'
import logo_yellow from '../../assets/images/logo-yellow.svg'

export default function getAppLogo(accentColor: string) {
  switch (accentColor) {
    case 'black': return logo_black
    case 'blue': return logo_blue
    case 'brown': return logo_brown
    case 'green': return logo_green
    case 'grey': return logo_grey
    case 'olive': return logo_olive
    case 'orange': return logo_orange
    case 'pink': return logo_pink
    case 'purple': return logo_purple
    case 'red': return logo_red
    case 'teal': return logo_teal
    case 'violet': return logo_violet
    case 'yellow': return logo_yellow
    default: return logo
  }
}