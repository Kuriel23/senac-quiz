import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang='pt-br'>
        <Head>
          {/* Default meta */}
          <meta name='author' content='Quiz' />
          <meta name='theme-color' content='#FFFF00' />
          <meta name='keywords' content='Quiz' />

          {/* Google Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='*'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Bungee&family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&family=Turret+Road:wght@400;500;700&family=Montserrat:wght@300&family=Yantramanav:wght@500&family=Pontano+Sans:wght@400&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
