import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImageProps } from '../../entities'

interface Props {
  slice: {
    primary: {
      content: any
      asset: 'video' | 'image'
      videoLink: string
      image: ImageProps
      layout: 'fullWidth' | 'splitView'
      link: string
      linkLabel: string
    }
  }
}
const Stage: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      {slice.primary.asset === 'video' ? (
        <video src={slice.primary.videoLink} controls className="w-full h-full" />
      ) : (
        <Image
          src={slice.primary.image.url}
          width={slice.primary.image.dimensions.width}
          height={slice.primary.image.dimensions.height}
          alt={slice.primary.image.alt}
        />
      )}
      <PrismicRichText field={slice.primary.content} />

      {slice.primary.link && (
        <Link href={slice.primary.link}>
          <a>{slice.primary.linkLabel}</a>
        </Link>
      )}
    </section>
  )
}

export default Stage
