import React from 'react'
import { PrismicRichText } from '@prismicio/react'

interface Props {
  slice: {
    primary: {
      content: any
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
