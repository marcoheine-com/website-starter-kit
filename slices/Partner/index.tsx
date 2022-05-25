import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { LinkProps } from '../../entities'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  slice: {
    primary: {
      content: any
    }
    items: {
      image: any
      link: LinkProps
    }[]
  }
}

const Partner: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />

      {slice.items?.map((item, index) => (
        <Link key={index} href={item.link.url}>
          <a>
            <Image
              src={item.image.url}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              alt={item.image.alt}
            />
          </a>
        </Link>
      ))}
    </section>
  )
}

export default Partner
