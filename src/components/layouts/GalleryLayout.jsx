import { useRef } from 'react'
import Head from 'next/head'
import PageLayout from './PageLayout'
import MotionAs from '../MotionAs'
import { ButtonAsGradient } from '../ButtonAsGradient'

const meta = {
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Discover our best Surf photos and videos',
}

const GalleryLayout = ({ children }) => {
  const ref = useRef(null)

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <PageLayout>
        <section
          ref={ref}
          className={`flex h-full w-full scroll-mt-32 flex-col items-center`}
        >
          <Header />
          <Body>{children}</Body>
        </section>
      </PageLayout>
    </>
  )
}

export default GalleryLayout

GalleryLayout.Header = Header
GalleryLayout.Body = Body

function Header() {
  return (
    <>
      <MotionAs As='h1' duration={0.7} delay={0.2} className='text-center'>
        Gallery
      </MotionAs>
      <MotionAs
        As='h2'
        initialX={100}
        delay={0.5}
        duration={0.8}
        className='mb-1 text-center'
      >
        Explore our best Photos
      </MotionAs>
      <MotionAs As='h2' delay={0.9} duration={0.8} className='text-center'>
        & Videos
      </MotionAs>

      <div className='my-1 flex w-full justify-evenly space-x-4 sm:my-2 md:my-4 md:justify-around xl:my-8'>
        <ButtonAsGradient
          As='Link'
          href='/gallery'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 md:w-1/3 md:py-4 text-center'
        >
          Photos
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/gallery/videos'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 md:w-1/3 md:py-4 text-center'
        >
          Videos
        </ButtonAsGradient>
      </div>
    </>
  )
}

function Body({ children }) {
  return <>{children}</>
}
