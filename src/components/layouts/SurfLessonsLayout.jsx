import { useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { ButtonAsGradient } from '../ButtonAsGradient'
import PageLayout from './PageLayout'
import { CldVideoPlayer } from 'next-cloudinary'
import { CustomCarousel } from '../Carousel'
import ButtonScrollToTop from '../ButtonScrollToTop'
import MotionAs from '../MotionAs'

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Lessons',
  description:
    'Discover our Private and Group Surf Lessons with experienced instructors. Learn to ride the waves, from beginner basics to advanced techniques. Book your session now!',
}

const SurfLessonsLayout = ({ children }) => {
  const ref = useRef(null)

  const scrollToTop = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

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

          <Footer scrollToTop={scrollToTop} />
        </section>
      </PageLayout>
    </>
  )
}

export default SurfLessonsLayout

SurfLessonsLayout.Header = Header
SurfLessonsLayout.Body = Body
SurfLessonsLayout.Footer = Footer

function Header() {
  return (
    <>
      <MotionAs As='h1' className='text-center' duration={0.7} delay={0.2}>
        Surf Lessons
      </MotionAs>
      <MotionAs
        As='h2'
        initialX={100}
        delay={0.5}
        duration={0.8}
        className='mb-2 text-center sm:mb-4 md:mb-8'
      >
        In Canggu
      </MotionAs>
      <MotionAs As='h3' delay={0.9} duration={0.8} className='text-center'>
        & during your{' '}
        <Link
          href='/surf-trips'
          target='_self'
          className='underline decoration-primary underline-offset-4 dark:decoration-cf-white'
        >
          Surf Trips
        </Link>
      </MotionAs>

      <div className='my-1 flex w-full justify-evenly space-x-4 sm:my-2 md:my-4 md:justify-around xl:my-8'>
        <ButtonAsGradient
          As='Link'
          href='/surf-lessons'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 md:w-1/3 md:py-4 text-center'
        >
          Private
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/surf-lessons/group'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 md:w-1/3 md:py-4 text-center'
        >
          Group
        </ButtonAsGradient>
      </div>
    </>
  )
}

function Body({ children }) {
  return <div className='pt-4'>{children}</div>
}

Body.Header = BodyHeader
Body.Content = BodyContent

function BodyHeader({ children }) {
  return <>{children}</>
}

function BodyContent({ images, children }) {
  return (
    <div
      className='mb-3 flex
          max-w-[364px] flex-col items-center justify-center
          rounded-xl border border-solid 
          border-cf-dark p-2
          hover:border-blue-400
        dark:border-cf-white 
          dark:hover:border-blue-400 
          md:max-w-none
          md:flex-row
          md:space-x-4
         '
    >
      <div className='flex w-full items-center overflow-hidden rounded-b-lg rounded-t-xl md:w-1/2 md:rounded-l-xl md:rounded-r-lg xl:w-2/3'>
        <CustomCarousel
          images={images}
          carouselKey='private-lessons'
          carouselClasses='mb-5 md:mb-0 h-72 md:h-[28rem] '
          imageClasses='mx-auto h-full rounded-t-xl rounded-b-lg md:rounded-l-xl md:rounded-r-lg object-cover'
          priority={true}
        />
      </div>
      <div className='w-full space-y-8 py-4 md:w-1/2 xl:w-1/3'>{children}</div>
    </div>
  )
}

function Footer({ scrollToTop }) {
  return (
    <>
      <section id='surf-lessons-footer' className=' mb-4'>
        <div id='surf-lessons-footer-what-to-bring' className='relative pb-8'>
          <h3 className='self-start'>What is included?</h3>
          <h4 className='mt-4 self-start font-bold'>All equipment needed !</h4>
          <div className='px-2'>
            <ul className='ms-4 w-full sm:columns-2 sm:gap-x-8'>
              <li className='list-disc'>
                <p>Premium custom made beginner soft boards with soft fins</p>
              </li>
              <li className='list-disc'>
                <p>Intermediate surf boards options</p>
              </li>
              <li className='list-disc'>
                <p>Leash</p>
              </li>
              <li className='list-disc break-after-column'>
                <p>Rash guard</p>
              </li>
              <li className='list-disc'>
                <p>Surf facial sunscreen / zink</p>
              </li>
              <li className='list-disc'>
                <p>Recovery water</p>
              </li>
              <li className='list-disc'>
                <p>Shower</p>
              </li>
            </ul>

            <h4 className='mt-4 self-start font-bold'>Options</h4>
            <ul className='ms-4 w-full'>
              <li className='list-disc'>
                <p>Photos & Videos of your session</p>
              </li>
              <li className='list-disc'>
                <p>Video analysis</p>
              </li>
            </ul>
          </div>

          <ButtonScrollToTop scrollToTop={scrollToTop} />
        </div>
        <hr />
        <div id='surf-lessons-footer-surfer-levels' className='relative py-8'>
          <h3>Surfer Levels</h3>
          <div className='px-2'>
            <h4 className='font-bold'>
              Beginner<span className='ms-2 text-cf-white'>🏄‍♂️</span>
            </h4>
            <p className='text-justify'>
              On your very first lesson you will be given an introduction on the
              beach about the surfboard, safety in the water, how to paddle,
              balance, stand up and surf the wave.
            </p>
            <p className='text-justify'>
              Surfing lessonss with a professional instructor including 30
              minutes of detailed surf basics, theory and safety on the beach
              before jumping into the water to catch and surf your first waves.
            </p>
          </div>

          <div className='px-2 py-4'>
            <h4 className='font-bold'>
              Intermediate<span className='ms-2 text-cf-white'>🏄‍♀️🏄‍♂️</span>
            </h4>
            <p className='text-justify'>
              You have already taken one or more surf lessons before and need
              help to improve your surfing? If you don&apos;t need the basic and
              theory part, we can jump straight into the water to surf and enjoy
              more time in the water.
            </p>
            <p className='text-justify'>
              Surfing lessonss in the water with a professional instructor. You
              will get help with wave selection and catching waves and tips on
              your body position.
            </p>
          </div>

          <div className='px-2'>
            <h4 className='font-bold'>
              Advanced<span className='ms-2 text-cf-white'>🏄‍♀️🏄‍♂️🏄‍♀️</span>
            </h4>
            <p className='text-justify'>
              You are able to catch stone-100 water or green waves already and
              want to improve your surfing?
            </p>
            <p className='text-justify'>
              Surfing lessonss in the water with a professional instructor. You
              will get help with wave selection, catching green waves and tips
              on your body position and surf maneuvers. It is highly recommended
              to add a video analysis option to your lesson to see how you are
              doing and your mistakes and let your instructor correct them
              afterwards.
            </p>
          </div>
          <ButtonScrollToTop className='md:hidden' scrollToTop={scrollToTop} />
        </div>
        <hr />
      </section>

      <CldVideoPlayer
        id='rendy-teach-video-01'
        width='1920'
        height='1080'
        src='RendyTeachVideo01'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='always'
        loop={true}
        className='rounded-md border-0 shadow-2xl'
        muted={true}
      />
    </>
  )
}
