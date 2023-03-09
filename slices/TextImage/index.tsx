import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Link from 'next/link'
import Image from 'next/image'
import { TextImageSlice } from '@/types.generated'
import { filledLinkTypeGuard } from '@/utils/type-guards/isFilledLink'
import { linkResolver } from '@/prismicio'

const TextImage: React.FC<SliceComponentProps<TextImageSlice>> = ({ slice }) => {
  if (slice.variation === 'default') {
    const filledLink = filledLinkTypeGuard(slice.primary.link) ? slice.primary.link : null
    return (
      <section>
        {slice.primary?.asset?.url ? (
          <Image
            src={slice.primary.asset.url}
            alt={slice.primary.asset.alt || ''}
            width={slice.primary.asset.dimensions.width}
            height={slice.primary.asset.dimensions.height}
          />
        ) : null}
        <PrismicRichText field={slice.primary.content} />
        {filledLink && (
          <Link href={linkResolver(filledLink)}>
            <a>{slice.primary.linkLabel}</a>
          </Link>
        )}
      </section>
    )
  }

  // TODO
  return <section></section>
}

export default TextImage
