import { SEO } from '../components/forward/SEO'

export default function Custom404 () {
  return (
    <>
      <SEO />
      <meta httpEquiv='refresh' content='0;url=/' />
    </>
  )
}
