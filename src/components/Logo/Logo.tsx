import { useMemo } from 'react'
import { Image, ImageProps } from 'semantic-ui-react'
import { getAppLogo } from '../../utils/ui'
import { useUserSettings } from '../../hooks'

const Logo = (props: ImageProps) => {

  const { settings: { accentColor } } = useUserSettings()

  const logo = useMemo(() => getAppLogo(accentColor), [accentColor])

  const imageProps = {
    ...props,
    src: logo
  }

  return <Image {...imageProps} />
}

export default Logo