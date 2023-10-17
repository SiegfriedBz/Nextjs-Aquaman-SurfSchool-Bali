import { useRef } from 'react'
import Link from 'next/link'
import { ButtonAsGradient } from '../ButtonAsGradient'
import PageLayout from './PageLayout'
import { CldVideoPlayer } from 'next-cloudinary'
import { CustomCarousel } from '../Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

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
      <h1 className='title'>Surf Lessons</h1>
      <h2 className='sub-title mb-1'>In Canggu</h2>
      <h2 className='sub-title-bis text-center'>
        & during your
        <Link
          href='/surf-trips'
          target='_self'
          className='text-gradient underline-gradient-link ms-2'
        >
          Surf Trips
        </Link>
      </h2>

      <div className='flex w-full justify-evenly space-x-4'>
        <ButtonAsGradient
          As='Link'
          href='/surf-lessons'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 text-center'
        >
          Private
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/surf-lessons/group'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='btn-hover-small-scale my-2 w-1/2 text-center'
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
      className='mb-3 
          flex flex-col items-center justify-center
          rounded-xl border border-solid 
          border-cf-dark
          p-2
        hover:border-blue-400 
        dark:border-cf-white 
        dark:hover:border-blue-400'
    >
      <CustomCarousel
        images={images}
        carouselKey='private-lessons'
        carouselClasses='mb-5 h-72 md:h-[30rem]'
        imageClasses='mx-auto h-full w-full rounded-t-xl rounded-b-lg object-cover md:w-11/12'
        priority={true}
      />
      <div className='w-full space-y-8 py-4'>{children}</div>
    </div>
  )
}

function Footer({ scrollToTop }) {
  return (
    <>
      <section id='surf-lessons-footer'>
        <div id='surf-lessons-footer-what-to-bring' className='relative mb-8'>
          <h3 className='self-start'>What is included?</h3>
          <h4 className='self-start'>All equipment needed !</h4>
          <div className='px-2'>
            <ul className='ms-4 w-full'>
              <li className='list-disc'>
                <p>Premium custom made beginner soft boards with soft fins</p>
              </li>
              <li className='list-disc'>
                <p>Intermediate surf boards options</p>
              </li>
              <li className='list-disc'>
                <p>Leash</p>
              </li>
              <li className='list-disc'>
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

            <h4 className='self-start'>Options</h4>
            <ul className='ms-4 w-full'>
              <li className='list-disc'>
                <p>Photos & Videos of your session</p>
              </li>
              <li className='list-disc'>
                <p>Video analysis</p>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            onClick={scrollToTop}
            className='absolute -bottom-[1.5rem] right-0 cursor-pointer text-2xl text-ternary-light transition-all hover:text-ternary'
          />
        </div>

        <hr />

        <div id='surf-lessons-footer-surfer-levels' className='mb-4 mt-8'>
          <h3>Surfer Levels</h3>
          <div className='px-2'>
            <h4>
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

          <div className='px-2'>
            <h4>
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
            <h4>
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
        </div>
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
      />
      <hr />
    </>
  )
}
