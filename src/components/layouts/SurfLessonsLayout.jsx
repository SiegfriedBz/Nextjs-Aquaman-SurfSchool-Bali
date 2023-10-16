import Link from 'next/link'
import { ButtonAsGradient } from '../ButtonAsGradient'
import PageLayout from './PageLayout'
import { CldVideoPlayer } from 'next-cloudinary'

const SurfLessonsLayout = ({ children }) => {
  return (
    <PageLayout>
      <section className={`flex h-full w-full flex-col items-center`}>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </section>
    </PageLayout>
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
      <h2 className='sub-title'>
        In Canggu &{' '}
        <Link
          href='/surf-trips'
          target='_self'
          className='text-gradient underline-gradient-link'
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
          extraClasses='my-2 w-1/2 text-center'
        >
          Private
        </ButtonAsGradient>
        <ButtonAsGradient
          As='Link'
          href='/surf-lessons/group'
          target='_self'
          variant='btn-as-gradient-amber'
          padding='px-2 py-1'
          extraClasses='my-2 w-1/2 text-center'
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

function Footer() {
  return (
    <>
      <section id='surf-lessons-footer'>
        <div id='surf-lessons-footer-what-to-bring' className='mb-8'>
          <h3 className='self-start'>What is included?</h3>
          <h4 className='self-start'>All equipment needed !</h4>
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

        <hr />

        <div id='surf-lessons-footer-surfer-levels' className='mt-8'>
          <h3>Surfer Levels</h3>
          <div>
            <h4>Beginner</h4>
            <p>
              On your very first lesson you will be given an introduction on the
              beach about the surfboard, safety in the water, how to paddle,
              balance, stand up and surf the wave.
            </p>
            <p>
              Surfing lessonss with a professional instructor including 30
              minutes of detailed surf basics, theory and safety on the beach
              before jumping into the water to catch and surf your first waves.
            </p>
          </div>

          <div>
            <h4>Intermediate</h4>
            <p>
              You have already taken one or more surf lessons before and need
              help to improve your surfing? If you don&apos;t need the basic and
              theory part, we can jump straight into the water to surf and enjoy
              more time in the water.
            </p>
            <p>
              Surfing lessonss in the water with a professional instructor. You
              will get help with wave selection and catching waves and tips on
              your body position.
            </p>
          </div>

          <div>
            <h4>Advanced</h4>
            <p>
              You are able to catch stone-100 water or green waves already and
              want to improve your surfing?
            </p>
            <p>
              Surfing lessonss in the water with a professional instructor. You
              will get help with wave selection, catching green waves and tips
              on your body position and surf maneuvers. It is highly recommended
              to add a video analysis option to your lesson to see how you are
              doing and your mistakes and let your instructor correct them
              afterwards.
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='my-4'
          >
            Surf Now
          </ButtonAsGradient>
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
