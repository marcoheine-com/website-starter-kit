import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as prismicT from '@prismicio/types'

interface Props {
  title: string
  description: string
  image: prismicT.LinkToMediaField
  imageAlt: prismicT.KeyTextField
  favicon?: string
}

export const HeadComponent: React.FC<Props> = ({
  title,
  description,
  image,
  imageAlt,
  favicon = '/favicon.png',
}) => {
  const router = useRouter()
  const canonical = `${router.pathname}${router.asPath}`

  const imageTypeGuard = (image: prismicT.LinkToMediaField): image is prismicT.FilledLinkToMediaField => {
    return (image as prismicT.FilledLinkToMediaField) !== null
  }

  const imageUrl = imageTypeGuard(image) ? image?.url : ''

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt || undefined} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={canonical} />
    </Head>
  )
}
