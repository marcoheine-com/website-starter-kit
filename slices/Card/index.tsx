import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImageProps, LinkProps } from '../../entities'

interface DefaultCardItem {
  asset: ImageProps
  content: RichTextField
  link: LinkProps
  linkLabel: string
}

interface LinkedCardItem {
  linkToPage: {
    data: any
  }
}

interface IconCardItem {
  asset: ImageProps
  backgroundAsset: ImageProps
  content: RichTextField
  link: LinkProps
  linkLabel: string
}

interface Props {
  slice: {
    primary: {
      content: RichTextField
      layout: 'two-column' | 'three-column'
      backgroundColor: boolean
    }
    variation: 'default' | 'itemAsLinkToServices' | 'icon'
    items: any
  }
}

const Card: React.FC<Props> = ({ slice }) => {
  if (slice.variation === 'itemAsLinkToServices') {
    return (
      <section>
        <PrismicRichText field={slice.primary.content} />
      </section>
    )
  }

  if (slice.variation === 'icon') {
    return (
      <section>
        <PrismicRichText field={slice.primary.content} />
        {slice.items?.map((item: any, index: number) => (
          <div key={index}>
            {item.asset.url ? (
              <Image
                src={item.asset.url}
                width={item.asset.dimensions.width}
                height={item.asset.dimensions.height}
                alt={item.asset.alt}
              />
            ) : null}

            <PrismicRichText field={item.content} />

            {item.link && (
              <Link href={item.link}>
                <a>{item.linkLabel}</a>
              </Link>
            )}
          </div>
        ))}
      </section>
    )
  }

  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
      {slice.items?.map((item: any, index: number) => (
        <div key={index}>
          {item.asset.url ? (
            <Image
              src={item.asset.url}
              width={item.asset.dimensions.width}
              height={item.asset.dimensions.height}
              alt={item.asset.alt}
            />
          ) : null}

          <PrismicRichText field={item.content} />

          {item.link && (
            <Link href={item.link}>
              <a>{item.linkLabel}</a>
            </Link>
          )}
        </div>
      ))}
    </section>
  )
}

export default Card
