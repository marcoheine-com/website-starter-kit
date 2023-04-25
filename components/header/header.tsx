import * as React from 'react'
import { SVGIcon } from '../svg-icon'
import { useOnClickOutside } from '../../utils/custom-hooks'
import { HeaderDocument, HeaderDocumentDataNavItemsItem } from '@/types.generated'
import { PrismicLink } from '@prismicio/react'

export const Header: React.FC<HeaderDocument> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef(null)

  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })

  if (!data) {
    return null
  }

  const { navItems } = data

  return (
    <header className="container-wrapper-xl relative flex w-full max-w-container-full items-center justify-between py-4">
      <nav>
        <button
          aria-expanded="false"
          aria-controls="menuItems"
          aria-label="menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[3] p-3"
        >
          <SVGIcon type={isOpen ? 'close' : 'menu'} />
        </button>
        <ul
          id="menuItems"
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-1000px] opacity-0'
          } absolute left-0 top-0 z-[2] h-screen w-full bg-white pt-28 pl-16 transition-all 960:w-auto 960:px-24`}
          ref={ref}
        >
          <span className="mb-6 block text-black-48">Menu</span>
          {navItems?.map((navItem: HeaderDocumentDataNavItemsItem, index: number) => (
            <li key={navItem.navLinkLabel || index} className="mb-6 last-of-type:mb-12">
              <PrismicLink field={navItem.navLink}>{navItem.navLinkLabel}</PrismicLink>
            </li>
          ))}
        </ul>
      </nav>

      {navItems?.length > 0 && (
        <ul>
          {navItems?.map((navItem: HeaderDocumentDataNavItemsItem, index: number) => (
            <li key={navItem.navLinkLabel || index}>
              <PrismicLink field={navItem.navLink}>{navItem.navLinkLabel}</PrismicLink>
            </li>
          ))}
        </ul>
      )}

      <div
        className={`absolute top-0 left-0 z-[1] h-screen w-full ${
          isOpen ? '960:block 960:bg-black-48' : 'hidden bg-transparent'
        }`}
      />
    </header>
  )
}
