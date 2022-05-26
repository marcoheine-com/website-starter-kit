import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import { RichTextField } from '@prismicio/types'

interface Props {
  slice: {
    primary: {
      content: RichTextField
      link: string
      linkLabel: string
      alignmentCenter: boolean
    }
  }
}

const Text: React.FC<Props> = ({ slice }) => {
  return (
    <section className={`${slice.primary.alignmentCenter ? 'flex flex-col items-center' : ''}`}>
      <PrismicRichText field={slice.primary.content} />
      {slice.primary.link && (
        <Link href={slice.primary.link}>
          <a>{slice.primary.linkLabel}</a>
        </Link>
      )}
    </section>
  )
}

export default Text
