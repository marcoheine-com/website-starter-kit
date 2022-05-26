import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import { RichTextField } from '@prismicio/types'
import { LinkProps, ImageProps } from '../../entities'

interface Props {
  slice: {
    primary: {
      content: RichTextField
    }
    items: {
      image: ImageProps
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
