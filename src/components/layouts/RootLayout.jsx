import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/context/appContext'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { m } from 'framer-motion'

const RootLayout = (props) => {
  const { children, ...customMeta } = props

  const router = useRouter()

  const meta = {
    canonicalUrl: `https://aquaman-bali-v2.vercel.app/${router.asPath}`,
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta name='robots' content='follow, index' />
        <meta
          name='keywords'
          content='Aquaman Bali, Surf Aquaman Bali, Aquaman Surf Bali, AquamanBali, Canggu Surf, Canggu Surf School, Canggu Surf Lessons, Bali Surf, Bali Surf Lessons, Bali Surf School, Bali Surf Trips, Bali Surf Photos, Canggu Surf Photos, Bali Surf Videos, Bali Surf Drone'
        ></meta>
        <meta
          property='og:url'
          content={`https://aquaman-bali-v2.vercel.app${router.asPath}`}
        />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta property='og:site_name' content='Aquaman Bali' />
        <meta property='og:image' content={meta.imageUrl} />
      </Head>

      <AppContextProvider>
        <div className='min-h-screen'>
          <Header />
          <main className={`container px-2 sm:px-0`}>{children}</main>
          <Footer />
        </div>
      </AppContextProvider>
    </>
  )
}

export default RootLayout
