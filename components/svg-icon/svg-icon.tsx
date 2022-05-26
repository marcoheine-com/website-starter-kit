import { Close } from './close'
import { IconType } from '../../entities/icons'
import { Menu } from './menu'

interface Props {
  type: IconType
  className?: string
  size?: string
}

export const SVGIcon: React.FC<Props> = ({ type, className = '', size = '24' }): JSX.Element | null => {
  switch (type) {
    case 'menu':
      return <Menu className={className} size={size} />
    case 'close':
      return <Close className={className} size={size} />
    default:
      return null
  }
}
