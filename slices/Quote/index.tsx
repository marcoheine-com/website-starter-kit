import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'

interface Props {
  slice: {
    primary: {
      quote: string
      details: RichTextField
    }
  }
}
const Quote: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      <h2>{slice.primary.quote}</h2>
      <PrismicRichText field={slice.primary.details} />
    </section>
  )
}

export default Quote
