const path = require('path')

/**
 * HACK: make sure Vercel includes those files
 * @see https://github.com/natterstefan/nextjs-template/pull/44#issuecomment-977663968
 */
if (typeof window === 'undefined') {
  const _files = path.resolve('./public/locales')
}

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
}
