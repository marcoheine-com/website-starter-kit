import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerSlice } from '@/types.generated'
import { filledImageTypeGuard } from '@/utils/type-guards/isFilledImage'
import { filledLinkTypeGuard } from '@/utils/type-guards/isFilledLink'
import { linkResolver } from '@/prismicio'

const Partner: React.FC<SliceComponentProps<PartnerSlice>> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />

      {slice.items?.map((item, index) => {
        const filledLink = filledLinkTypeGuard(item.link) ? item.link : null
        const filledImage = filledImageTypeGuard(item.image) ? item.image : null
        if (!filledLink || !filledImage) return null

        return (
          <Link key={index} href={linkResolver(filledLink)}>
            <Image
              src={filledImage.url}
              width={filledImage.dimensions.width}
              height={filledImage.dimensions.height}
              alt={filledImage.alt || ''}
            />
          </Link>
        )
      })}
    </section>
  )
}

export default Partner
