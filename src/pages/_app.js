import RootLayout from '@/components/layouts/RootLayout'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <RootLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootLayout>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
