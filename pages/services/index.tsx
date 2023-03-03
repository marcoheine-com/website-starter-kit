import { FooterDocument, HeaderDocument, ServicesDistributionDocument } from '@/types.generated'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../../components/footer'
import { HeadComponent } from '../../components/head/head'
import { Header } from '../../components/header'
import { createClient } from '../../prismicio'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const doc = (await client.getSingle('services-distribution', {})) || null
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
  doc: ServicesDistributionDocument
  header: HeaderDocument
  footer: FooterDocument
}

const Services: NextPage<PageProps> = ({ doc, header, footer }) => {
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
        <h1>Services</h1>
        <p>Edit the index.tsx /pages/services to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>

      <Footer {...footer} />
    </div>
  )
}

export default Services
