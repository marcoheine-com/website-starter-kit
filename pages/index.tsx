import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '../components/main-layout'
import { ImageProps } from '../entities'
import { createClient } from '../prismicio'

// NOTE: You have to create your first prismic document to make this work
// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient(previewData)

//   const doc = (await client.getSingle('index', {})) || null
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
    metaTitle: string
    metaDescription: string
    thumbnail: ImageProps
  }
}

const Home: NextPage<PageProps> = ({ doc }) => {
  return (
    <div>
      <Head>
        <title>Website Starter kit</title>
        <meta name="description" content="Website Starter kit to kickstart new website projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <h1>Website Starter Kit</h1>
        <p>Edit the index.tsx to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </MainLayout>
    </div>
  )
}

export default Home
