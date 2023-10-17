import RootLayout from '@/components/layouts/RootLayout'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <RootLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RootLayout>
    </>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
