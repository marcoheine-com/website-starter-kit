import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../components/footer'
import { HeadComponent } from '../components/head/head'
import { Header } from '../components/header'
import { createClient } from '../prismicio'
import { FooterDocument, HeaderDocument, IndexDocument } from '../types.generated'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const doc = (await client.getSingle('index', {})) || null
  const header = (await client.getSingle('header', {})) || null
  const footer = (await client.getSingle('footer', {})) || null

  return {
    props: {
      doc,
      header,
      footer,
    },
  }
}

interface PageProps {
  doc: IndexDocument
  header: HeaderDocument
  footer: FooterDocument
}

const Home: NextPage<PageProps> = ({ doc, header, footer }) => {
  return (
    <div className="page-container">
      <HeadComponent
        title={doc?.data?.title || 'Website Starter kit'}
        description={doc?.data?.description || 'Website Starter kit to kickstart new website projects'}
        image={doc?.data?.image}
        imageAlt={doc?.data?.imageAlt}
      />
      <Header {...header} />

      <main className="page-container max-w-screen-1680">
        <h1 className="container-wrapper-xl">Website Starter Kit</h1>
        <p>Edit the index.tsx to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>
      <Footer {...footer} />
    </div>
  )
}

export default Home
