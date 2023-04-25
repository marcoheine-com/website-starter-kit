import Link from 'next/link'
import { FooterDocument, HeaderDocument } from '../../types.generated'
import { Footer } from '../footer'
import { Header } from '../header'
import { Head } from '@/components/head'

interface FourOhFourProps {
  header: HeaderDocument
  footer: FooterDocument
}

export const FourOhFour: React.FC<FourOhFourProps> = ({ header, footer }) => {
  return (
    <>
      <Head
        title={'Stuttgarter Kickers e.V.'}
        description={
          'Herzlich Willkommen beim SV Stuttgarter Kickers e.V. - Hier finden Sie Informationen zu Profis, Nachwuchs, Videos, Bildergalerien und vieles mehr.'
        }
      />
      <Header {...header} />

      <main className="max-w-screen-1680">
        <h1>404 - Diese Seite konnte leider nicht gefunden werden.</h1>
        <p>
          <Link href="/">Zurück zur Startseite</Link>
        </p>
      </main>

      <Footer {...footer} />
    </>
  )
}
