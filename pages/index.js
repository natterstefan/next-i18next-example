import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '../components/Page'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Homepage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Page>
      <Header title={t('title')} />
      <main className="flex flex-col">
        <Link href="/" locale={router.locale === 'en' ? 'de' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>

        <Link href="/second-page">
          <button type="button">{t('to-second-page')}</button>
        </Link>

        <Link href="/catchall/some-params">
          <button type="button">{t('to-catchall-page')}</button>
        </Link>
      </main>
      <Footer />
    </Page>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Homepage
