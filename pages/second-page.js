import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '../components/Page'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const SecondPage = () => {

  const { t } = useTranslation('second-page')

  return (
    <Page>
      <main>
        <Header title={t('title')} />
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </Page>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['second-page']),
  },
})

export default SecondPage
