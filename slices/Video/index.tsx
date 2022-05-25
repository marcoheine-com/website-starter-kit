import React from 'react'
import { PrismicRichText } from '@prismicio/react'

interface Props {
  slice: {
    primary: {
      video?: any
      youtubeLink?: string
    }
    variation: 'default' | 'youtube-link'
  }
}
const Video: React.FC<Props> = ({ slice }) => {
  if (slice.variation === 'default') {
    return (
      <section>
        <video src={slice.primary.video} controls className="w-full h-full" />
      </section>
    )
  }

  return (
    <section>
      <video src={slice.primary.youtubeLink} controls className="w-full h-full" />
    </section>
  )
}

export default Video
