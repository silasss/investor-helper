import { AppProps } from 'next/app'
import { Nav } from '../components/Nav'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
