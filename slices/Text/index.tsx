import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Link from 'next/link'
import { TextSlice } from '@/types.generated'
import { filledLinkTypeGuard } from '@/utils/type-guards/isFilledLink'
import { linkResolver } from '@/prismicio'

const Text: React.FC<SliceComponentProps<TextSlice>> = ({ slice }) => {
  const filledLink = filledLinkTypeGuard(slice.primary.link) ? slice.primary.link : null
  return (
    <section className={`${slice.primary.alignmentCenter ? 'flex flex-col items-center' : ''}`}>
      <PrismicRichText field={slice.primary.content} />
      {filledLink && (
        <Link href={linkResolver(filledLink)}>
          <a>{slice.primary.linkLabel}</a>
        </Link>
      )}
    </section>
  )
}

export default Text
