import Image from 'next/image'
import Link from 'next/link'
import { HeaderProps, BurgerMenuItem, NavItem, SocialItem } from '../../entities'
import { linkResolver } from '../../prismicio'
import * as React from 'react'
import { SVGIcon } from '../svg-icon'
import { useOnClickOutside } from '../../utils/custom-hooks'

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef(null)

  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })

  if (!data) {
    return null
  }

  const { burgerMenuItems, logo, NavItems, socialLinks } = data

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
            isOpen ? 'opacity-1 translate-x-0' : 'translate-x-[-1000px] opacity-0'
          } absolute left-0 top-0 z-[2] h-screen w-full bg-white pt-28 pl-16 transition-all 960:w-auto 960:px-24`}
          ref={ref}
        >
          <span className="mb-6 block text-black-48">Menu</span>
          {burgerMenuItems?.map((burgerMenuItem: BurgerMenuItem) => (
            <li key={burgerMenuItem.burgerMenuLink.uid} className="mb-6 last-of-type:mb-12">
              <Link href={linkResolver(burgerMenuItem.burgerMenuLink)}>
                <a>{burgerMenuItem.burgerMenulinkLabel}</a>
              </Link>
            </li>
          ))}

          <span className="mb-6 block text-black-48">Folgen Sie uns auf</span>
          <ul>
            {socialLinks?.map((socialLink: SocialItem) => (
              <li key={socialLink.socialLink.uid} className="mb-6 last:mb-0">
                <Link href={linkResolver(socialLink.socialLink)}>
                  <a className="flex gap-4">
                    {socialLink.socialIcon?.url ? (
                      <Image
                        src={socialLink.socialIcon.url}
                        alt={socialLink.socialIcon.alt}
                        width={socialLink.socialIcon.dimensions.width}
                        height={socialLink.socialIcon.dimensions.height}
                      />
                    ) : null}
                    {socialLink.socialLinkLabel}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
      <Image src={logo.url} alt={logo.alt} width={logo.dimensions.width} height={logo.dimensions.height} />

      {NavItems?.length > 0 && (
        <ul>
          {NavItems?.map((navItem: NavItem) => (
            <li key={navItem.navLink.url}>
              <Link href={linkResolver(navItem.navLink)}>
                <a>{navItem.navLinkLabel}</a>
              </Link>
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
