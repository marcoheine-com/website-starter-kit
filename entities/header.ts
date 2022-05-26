import { BurgerMenuItem } from './burgerMenuItem'
import { ImageProps } from './image'
import { NavItem } from './navItem'
import { SocialItem } from './socialItem'

export interface HeaderProps {
  data: {
    logo: ImageProps
    NavItems: NavItem[]
    burgerMenuItems: BurgerMenuItem[]
    socialLinks: SocialItem[]
  }
}
