import * as React from 'react'
import { ImageProps } from '../../entities'
import Head from 'next/head'

interface Props {
  title: string
  metaDescription: string
  thumbnail: ImageProps
  favicon?: string
}
export const HeadComponent: React.FC<Props> = ({
  title,
  metaDescription,
  thumbnail,
  favicon = '/favicon.ico',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="thumbnail" content={thumbnail?.url} />
      <link rel="icon" href={favicon} />
    </Head>
  )
}
