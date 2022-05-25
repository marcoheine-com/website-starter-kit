import React from 'react'
import { PrismicRichText } from '@prismicio/react'

interface Props {
  slice: {
    primary: {
      quote: string
      details: any
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
