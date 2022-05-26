import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'

interface Props {
  slice: {
    primary: {
      content: RichTextField
      linkToForm: {
        data: any
      }
    }
  }
}

const Form: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
    </section>
  )
}

export default Form
