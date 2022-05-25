import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

interface Props {
  slice: {
    primary: {
      content: any
      link: string
      linkLabel?: string
    }
    variation: 'default' | 'social-media'
  }
}
const Infobox: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
      {slice.primary.link && (
        <Link href={slice.primary.link}>
          <a>{slice.primary.linkLabel}</a>
        </Link>
      )}
    </section>
  )
}

export default Infobox
