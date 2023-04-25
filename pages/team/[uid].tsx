import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { createClient } from '../../prismicio'
import * as prismic from '@prismicio/client'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { HeadComponent } from '../../components/head/head'
import { FooterDocument, HeaderDocument, NewsDetailDocument } from '@/types.generated'
import { FourOhFour } from '@/components/four-oh-four'

export async function getStaticPaths() {
  const client = createClient()
  const docs = await client.get({
    predicates: prismic.predicate.at('document.type', 'news-detail'),
    lang: '*',
  })
  return {
    paths: docs.results.map((doc: any) => {
      return {
        params: {
          uid: doc.uid,
        },
      }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData })

  let doc = null
  let errorCode = null

  try {
    const uid = params?.uid as string

    doc = (await client.getByUID('people', uid, {})) || null
  } catch (error) {
    console.error(error)
    errorCode = '404'
  }

  const header = (await client.getSingle('header', {})) || null
  const footer = (await client.getSingle('footer', {})) || null

  return {
    props: {
      doc,
      header,
      footer,
      errorCode,
    },
  }
}

interface PageProps {
  doc: NewsDetailDocument
  header: HeaderDocument
  footer: FooterDocument
  errorCode?: null | '404'
}

const NewsDetail: NextPage<PageProps> = ({ doc, header, footer, errorCode }) => {
  if (errorCode) {
    return <FourOhFour header={header} footer={footer} />
  }

  return (
    <div className="page-container">
      <HeadComponent
        title={doc?.data?.title}
        description={doc?.data?.description}
        image={doc?.data?.image}
        imageAlt={doc?.data?.imageAlt}
      />

      <Header {...header} />

      <main className="max-w-screen-1680">
        <h1>News Detail</h1>
        <p>Edit the [uid].tsx in /pages/news to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>

      <Footer {...footer} />
    </div>
  )
}

export default NewsDetail
