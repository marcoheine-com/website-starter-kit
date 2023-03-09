import { linkResolver } from '@/prismicio'
import { StageSlice } from '@/types.generated'
import { filledImageTypeGuard } from '@/utils/type-guards/isFilledImage'
import { filledLinkTypeGuard } from '@/utils/type-guards/isFilledLink'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Stage: React.FC<SliceComponentProps<StageSlice>> = ({ slice }) => {
  const filledLink = filledLinkTypeGuard(slice.primary.link) ? slice.primary.link : null
  const filledImage = filledImageTypeGuard(slice.primary.image) ? slice.primary.image : null

  return (
    <section>
      {slice.primary.asset === 'video' && slice.primary.videoLink ? (
        // @ts-ignore TODO: fix this
        <video src={slice.primary.videoLink} controls className="h-full w-full" />
      ) : null}

      {filledImage && (
        <Image
          src={filledImage?.url}
          width={filledImage.dimensions.width}
          height={filledImage.dimensions.height}
          alt={filledImage.alt || ''}
        />
      )}
      <PrismicRichText field={slice.primary.content} />

      {filledLink && (
        <Link href={linkResolver(filledLink)}>
          <a>{slice.primary.linkLabel}</a>
        </Link>
      )}
    </section>
  )
}

export default Stage
