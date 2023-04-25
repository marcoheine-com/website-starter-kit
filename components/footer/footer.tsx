import { FooterDocument, FooterDocumentDataNavItemsItem } from '@/types.generated'
import { PrismicLink } from '@prismicio/react'

export const Footer: React.FC<FooterDocument> = ({ data }) => {
  if (!data) {
    return null
  }

  const { copyRight, navItems } = data

  return (
    <footer className="container-wrapper-xl mb-16 flex w-full max-w-container-lg flex-wrap justify-between gap-4">
      {navItems?.length > 0 && (
        <ul>
          {navItems?.map((navItem: FooterDocumentDataNavItemsItem, index: number) => (
            <li key={navItem.navLinkLabel || index}>
              <PrismicLink field={navItem.navLink}>
                <a>{navItem.navLinkLabel}</a>
              </PrismicLink>
            </li>
          ))}
        </ul>
      )}
    </footer>
  )
}
