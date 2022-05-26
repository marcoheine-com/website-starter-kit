import { ImageProps } from './image'
import { LinkProps } from './link'

export interface SocialItem {
  socialLink: LinkProps
  socialIcon?: ImageProps
  socialLinkLabel: string
}
