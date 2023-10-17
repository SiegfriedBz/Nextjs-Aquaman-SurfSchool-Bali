import { useRef } from 'react'
import { ButtonAsGradient } from '../ButtonAsGradient'
import PageLayout from './PageLayout'

const GalleryLayout = ({ children }) => {
  const ref = useRef(null)

  return (
    <PageLayout>
      <section
        ref={ref}
        className={`flex h-full w-full scroll-mt-32 flex-col items-center`}
      >
        <Header />
        <Body>{children}</Body>
      </section>
    </PageLayout>
  )
}

export default GalleryLayout

GalleryLayout.Header = Header
GalleryLayout.Body = Body

function Header() {
  return (
    <>
      <h1 className='title'>Gallery</h1>
      <h2 className='sub-title text-center'>
        Explore our best Photos{' '}
        <span className='whitespace-nowrap'>& Videos</span>
      </h2>

      <div className='flex w-full justify-evenly space-x-4'>
        <ButtonAsGradient
          As='Link'
          href='/gallery'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 text-center'
        >
          Photos
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/gallery/videos'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 text-center'
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
