import { RichTextField } from '@prismicio/types'
import { ImageProps } from './image'
import { NavItem } from './navItem'
import { SocialItem } from './socialItem'

export interface FooterProps {
  data: {
    contentColOne: RichTextField
    contentColTwo: RichTextField
    copyRight: string
    logo: ImageProps
    navItems: NavItem[]
    socialLinks: SocialItem[]
  }
}
