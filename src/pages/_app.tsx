import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import '~/styles/global.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '600'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>Ignite Lab</title>
        <meta name="description" content="Um site feito para fins educacionais" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
