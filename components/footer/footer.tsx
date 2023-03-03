import {
  FooterDocument,
  FooterDocumentDataNavItemsItem,
  FooterDocumentDataSocialLinksItem,
} from '@/types.generated'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import { linkResolver } from '../../prismicio'

export const Footer: React.FC<FooterDocument> = ({ data }) => {
  if (!data) {
    return null
  }

  const { contentColOne, contentColTwo, copyRight, logo, navItems, socialLinks } = data

  return (
    <footer className="container-wrapper-xl mb-16 flex w-full max-w-container-lg flex-wrap justify-between gap-4">
      <span>
        {logo.url ? (
          <Image
            src={logo.url}
            alt={logo.alt || ''}
            width={logo.dimensions.width}
            height={logo.dimensions.height}
          />
        ) : null}
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
          {navItems?.map((navItem: FooterDocumentDataNavItemsItem, index: number) => (
            <li key={navItem.navLinkLabel || index}>
              <Link href={linkResolver(navItem.navLink)}>
                <a>{navItem.navLinkLabel}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {socialLinks?.length > 0 && (
        <ul>
          {socialLinks?.map((socialItem: FooterDocumentDataSocialLinksItem, index: number) => (
            <li key={socialItem.socialLinkLabel || index}>
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
