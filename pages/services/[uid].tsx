import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { FooterProps, HeaderProps, ImageProps } from '../../entities'
import { createClient } from '../../prismicio'
import * as prismic from '@prismicio/client'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { HeadComponent } from '../../components/head/head'

// NOTE: You have to create your first prismic document to make this work
// export async function getStaticPaths() {
//   const client = createClient()
//   const docs = await client.get({
//     predicates: prismic.predicate.at('document.type', 'service-detail'),
//     lang: '*',
//   })
//   return {
//     paths: docs.results.map((doc: any) => {
//       return {
//         params: {
//           uid: doc.uid,
//         },
//       }
//     }),
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
//   const client = createClient(previewData)

//   // @ts-ignore
//   const doc = (await client.getByUID('service-detail', params?.uid, {})) || null
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

const ServiceDetail: NextPage<PageProps> = ({ doc, header, footer }) => {
  return (
    <div className="page-container">
      <HeadComponent
        title={doc?.title}
        description={doc?.description}
        image={doc?.image}
        imageAlt={doc?.imageAlt}
      />

      <Header data={header?.data} />

      <main className="max-w-screen-1680">
        <h1>Service Detail</h1>
        <p>Edit the [uid].tsx in /pages/services to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>

      <Footer data={footer?.data} />
    </div>
  )
}

export default ServiceDetail
