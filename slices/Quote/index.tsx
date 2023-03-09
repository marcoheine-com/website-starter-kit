import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { QuoteSlice } from '@/types.generated'

const Quote: React.FC<SliceComponentProps<QuoteSlice>> = ({ slice }) => {
  return (
    <section>
      <h2>{slice.primary.quote}</h2>
      <PrismicRichText field={slice.primary.details} />
    </section>
  )
}

export default Quote
