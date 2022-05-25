import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ImageProps, LinkProps } from '../../entities'
import Image from 'next/image'

interface ImageItem {
  asset: ImageProps
}

interface Props {
  slice: {
    primary: {
      layout: 'single' | 'gallery'
    }
    items: ImageItem[]
  }
}

const ImageSlice: React.FC<Props> = ({ slice }) => {
  return (
    <section>
      {slice.items?.map((item, index) => (
        <Image
          key={index}
          src={item.asset.url}
          width={item.asset.dimensions.width}
          height={item.asset.dimensions.height}
          alt={item.asset.alt}
        />
      ))}
    </section>
  )
}

export default ImageSlice
