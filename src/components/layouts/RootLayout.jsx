import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <Header />
      {/* <main
      className={`container px-2 py-4 xs:py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32`}
      >
        {children}
      </main> */}
      <main className={`container px-2 sm:px-0`}>{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
