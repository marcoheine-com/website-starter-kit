import React from 'react'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import { ImageSliceSlice, ImageSliceSliceDefaultItem } from '@/types.generated'
import { filledImageTypeGuard } from '@/utils/type-guards/isFilledImage'

const ImageSlice: React.FC<SliceComponentProps<ImageSliceSlice>> = ({ slice }) => {
  return (
    <section>
      {slice.items?.map((item: ImageSliceSliceDefaultItem, index) => {
        const filledImage = filledImageTypeGuard(item.asset) ? item.asset : null

        if (!filledImage) return null

        return (
          <Image
            key={index}
            src={filledImage.url}
            width={filledImage.dimensions.width}
            height={filledImage.dimensions.height}
            alt={filledImage.alt || ''}
          />
        )
      })}
    </section>
  )
}

export default ImageSlice
