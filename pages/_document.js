import Document, { Html, Head, Main, NextScript } from 'next/document'

// @see https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        </Head>
        <body className="p-4">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument