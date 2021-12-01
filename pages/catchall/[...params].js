import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '../../components/Page'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// @see https://nextjs.org/docs/routing/dynamic-routes
const CatchAll = () => {
  const router = useRouter()
  const { t } = useTranslation('catchall-page')

  const slug = Array.isArray(router.query.params) ? router.query.params : []

  useEffect(() => {
    console.log('mounted')

    return () => {
      console.log('unmounted')
    }
  }, [])

  return (
    <Page>
      <Header title={t('title')} />
      <main className="flex flex-col">
        <h1>Params: {slug.join('/')}</h1>
        <Link href={router.asPath + '/deeper'}>
          <button type="button">{t('go-to-next-catchall')}</button>
        </Link>
        <Link href="/">
          <button type="button">{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer />
    </Page>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['catchall-page'])),
  },
})

export default CatchAll
