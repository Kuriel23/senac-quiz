import Head from 'next/head'
import { useRouter } from 'next/router'

import { APP_URL } from '../../utils/constants'
import { makeUrl } from '../../utils/makeUrl'

export function SEO ({
  url,
  children,
  title = 'Resenha - Um simples servidor no Discord',
  image = '/favicon.png',
  description = 'Um servidor amigável dentro do Discord, descubra mais!!'
}) {
  const router = useRouter()

  const metaImage = makeUrl(image)
  const canonical = makeUrl(url ?? router.asPath)

  return (
    <Head>
      <title>{title}</title>

      <link rel='canonical' href={canonical} />

      <link rel='icon' href='/favicon.png' />
      <link rel='shortcut icon' href='/favicon.png' />

      <link itemProp='url' href={APP_URL} />

      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />

      <meta name='image' content={metaImage} />
      <meta name='description' content={description} />

      {/* OpenGraph */}

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:site_name' content='Resenha' />

      <meta property='og:title' content={title} />
      <meta property='og:url' content={canonical} />
      <meta property='og:description' content={description} />

      <meta property='og:image:width' content='1920' />
      <meta property='og:image:height' content='1080' />

      <meta property='og:image' content={metaImage} />
      <meta property='og:image:secure_url' content={metaImage} />

      {/* Twitter */}

      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      <meta name='twitter:image' content={metaImage} />
      <meta name='twitter:image:src' content={metaImage} />

      <meta name='twitter:card' content='summary_small_image' />

      {children}
    </Head>
  )
}
