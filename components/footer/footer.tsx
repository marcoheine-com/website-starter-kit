import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterProps, NavItem, SocialItem } from '../../entities'
import { linkResolver } from '../../prismicio'

export const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data) {
    return null
  }

  const { contentColOne, contentColTwo, copyRight, logo, navItems, socialLinks } = data

  return (
    <footer className="flex flex-wrap gap-4 justify-between mb-16 w-full max-w-container-lg padding-x">
      <span>
        <Image src={logo.url} alt={logo.alt} width={logo.dimensions.width} height={logo.dimensions.height} />
        <p>{copyRight}</p>
      </span>

      <span>
        <PrismicRichText field={contentColOne} />
      </span>
      <span>
        <PrismicRichText field={contentColTwo} />
      </span>

      {navItems?.length > 0 && (
        <ul>
          {navItems?.map((navItem: NavItem) => (
            <li key={navItem.navLink.url}>
              <Link href={linkResolver(navItem.navLink)}>
                <a>{navItem.navLinkLabel}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {socialLinks?.length > 0 && (
        <ul>
          {socialLinks?.map((socialItem: SocialItem) => (
            <li key={socialItem.socialLink.url}>
              <Link href={linkResolver(socialItem.socialLink)}>
                <a>{socialItem.socialLinkLabel}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </footer>
  )
}
