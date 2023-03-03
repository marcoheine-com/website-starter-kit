import { linkResolver } from '@/prismicio'
import { CardSlice, CardSliceIconItem } from '@/types.generated'
import { filledLinkTypeGuard } from '@/utils/type-guards/isFilledLink'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card: React.FC<SliceComponentProps<CardSlice>> = ({ slice }) => {
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
        {slice.items?.map((item: CardSliceIconItem, index: number) => {
          const isFilledLink = filledLinkTypeGuard(item.link) ? item : null
          return (
            <div key={index}>
              {item.asset.url ? (
                <Image
                  src={item.asset.url}
                  width={item.asset.dimensions.width}
                  height={item.asset.dimensions.height}
                  alt={item.asset.alt || ''}
                />
              ) : null}

              <PrismicRichText field={item.content} />

              {isFilledLink && (
                <Link href={linkResolver(isFilledLink)}>
                  <a>{isFilledLink.linkLabel}</a>
                </Link>
              )}
            </div>
          )
        })}
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
