import App from 'next/app'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

// @see https://nextjs.org/docs/advanced-features/custom-app
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}


export default appWithTranslation(MyApp)
