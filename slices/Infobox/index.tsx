import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { InfoboxSlice } from '@/types.generated'

const Infobox: React.FC<SliceComponentProps<InfoboxSlice>> = ({ slice }) => {
  // TODO
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
    </section>
  )
}

export default Infobox
