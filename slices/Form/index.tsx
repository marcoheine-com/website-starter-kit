import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { FormSlice } from '@/types.generated'

const Form: React.FC<SliceComponentProps<FormSlice>> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
    </section>
  )
}

export default Form
