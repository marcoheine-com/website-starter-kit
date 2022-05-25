import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ImageProps } from '../../entities'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  slice: {
    primary: {
      content: any
      asset: ImageProps
      changeOrder: boolean
      link?: string
      linkLabel: string
    }
    variation: 'default' | 'itemAsLinkToServices'
  }
}
const TextImage: React.FC<Props> = ({ slice }) => {
  if (slice.variation === 'default') {
    return (
      <section>
        <Image
          src={slice.primary.asset.url}
          alt={slice.primary.asset.alt}
          width={slice.primary.asset.dimensions.width}
          height={slice.primary.asset.dimensions.height}
        />
        <PrismicRichText field={slice.primary.content} />
        {slice.primary.link && (
          <Link href={slice.primary.link}>
            <a>{slice.primary.linkLabel}</a>
          </Link>
        )}
      </section>
    )
  }

  return <section></section>
}

export default TextImage
