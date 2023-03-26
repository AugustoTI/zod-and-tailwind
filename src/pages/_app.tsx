import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
