import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../../components/footer'
import { HeadComponent } from '../../components/head/head'
import { Header } from '../../components/header'
import { FooterProps, HeaderProps, ImageProps } from '../../entities'
import { createClient } from '../../prismicio'

// NOTE: You have to create your first prismic document to make this work
// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient(previewData)

//   const doc = (await client.getSingle('news-distribution', {})) || null
//   const header = (await client.getSingle('header', {})) || null
//   const footer = (await client.getSingle('footer', {})) || null

//   return {
//     props: {
//       doc,
//       header,
//       footer,
//     },
//   }
// }

interface PageProps {
  doc: {
    uid: string
    title: string
    description: string
    image: {
      url: string
      alt: string
    }
    imageAlt: string
  }
  header: HeaderProps
  footer: FooterProps
}

const News: NextPage<PageProps> = ({ doc, header, footer }) => {
  return (
    <div className="page-container">
      <HeadComponent
        title={doc?.title}
        description={doc?.description}
        image={doc?.image}
        imageAlt={doc?.imageAlt}
      />

      <Header data={header?.data} />

      <main className="main-layout padding-x">
        <h1>News</h1>
        <p>Edit the index.tsx /pages/news to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>

      <Footer data={footer?.data} />
    </div>
  )
}

export default News
