import { useState, useRef, useLayoutEffect, useCallback, useId } from 'react'
import { motion, useInView } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import HomePageLayout from '@/components/layouts/HomePageLayout'
import MapView from '@/components/MapView'
import { Testimonials, TestimonialStars } from '@/components/Testimonials'
import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import { CustomCarousel } from '@/components/Carousel'
import {
  homeSurfLessonsImages,
  homeSurfTripsImages,
  homeAboutMeImages,
} from '@/data/homePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import getMapMarkers from '@/utils/getMapMarkers'
import ButtonScrollToTop from '@/components/ButtonScrollToTop'

const meta = {
  title: 'Aquaman Bali | Surf School | Home',
  description:
    'Discover Aquaman Bali, your Premier Surf School and Surf Trip destination. Grow your surfing skills from beginner to advanced. Book now!',
}

const h2Variants = {
  hide: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 1.5, stiffness: 150 },
  },
}

export default function Home({
  homeSurfLessonsImg,
  homeSurfTripsImg,
  homeAboutMeImg,
  mapMarkers,
}) {
  const homeSurfLessonsId = useId()
  const homeSurfTripsId = useId()
  const homeAboutMeId = useId()
  const heroRef = useRef(null)
  const subHeroRef = useRef(null)
  const [viewportOffset, setViewportOffset] = useState(0)

  // set hero height to viewport height
  const setHeroHeight = useCallback(() => {
    const adjustedHeroHeight = window.outerHeight - viewportOffset
    heroRef.current.style.height = `${adjustedHeroHeight}px`
  }, [viewportOffset])

  useLayoutEffect(() => {
    if (window == undefined || heroRef?.current == null) return

    setViewportOffset(window.outerHeight - window.innerHeight)
    setHeroHeight()
  }, [setHeroHeight])

  const scrollToTop = () => {
    subHeroRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <HomePageLayout>
        <section id='hero'>
          <Hero ref={heroRef} />
        </section>

        <div
          ref={subHeroRef}
          id='sub-hero'
          className='relative scroll-mt-[5rem]'
        >
          <section
            id='home-surf-lessons'
            className='flex scroll-mt-24 flex-col'
          >
            <HomeSurfLessons
              homeSurfLessonsId={homeSurfLessonsId}
              homeSurfLessonsImg={homeSurfLessonsImg}
            />
          </section>

          <hr />

          <section id='home-about-me' className='relative flex flex-col'>
            <HomeAboutMe
              homeAboutMeId={homeAboutMeId}
              homeAboutMeImg={homeAboutMeImg}
              scrollToTop={scrollToTop}
            />
          </section>

          <hr />

          <section id='home-surf-trips' className='relative flex flex-col'>
            <HomeSurfTrips
              homeSurfTripsId={homeSurfTripsId}
              homeSurfTripsImg={homeSurfTripsImg}
              // homeSurfLessonsId={homeSurfLessonsId}
              // homeSurfLessonsImg={homeSurfLessonsImg}
              scrollToTop={scrollToTop}
            />
          </section>

          <hr />

          <section
            id='testimonials'
            className='relative flex scroll-mt-24 flex-col'
          >
            <HomeTestimonials scrollToTop={scrollToTop} />
          </section>

          <hr />

          <section id='visit-us' className='flex scroll-mt-24 flex-col'>
            <HomeMapView mapMarkers={mapMarkers} />
          </section>

          <ButtonScrollToTop
            scrollToTop={scrollToTop}
            homeBottomPageBtn={true}
          />
        </div>
      </HomePageLayout>
    </>
  )
}

const HomeSurfLessons = ({ homeSurfLessonsId, homeSurfLessonsImg }) => {
  const h2Ref = useRef(null)
  const isInView = useInView(h2Ref, { once: true, threshold: 0.5 })

  return (
    <>
      <motion.h2
        ref={h2Ref}
        variants={h2Variants}
        initial='hide'
        animate={isInView ? 'animate' : 'hide'}
        transition={{ type: 'spring', duration: 1.5, stiffness: 150 }}
        className='mx-auto whitespace-nowrap'
      >
        Surf Lessons
      </motion.h2>

      <div className='flex flex-col md:my-4 lg:my-8 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-2/3'>
          <CustomCarousel
            carouselKey={homeSurfLessonsId}
            images={homeSurfLessonsImg}
            carouselClasses='h-64 sm:h-80 md:h-96 lg:h-[30rem]'
            priority={true}
            imageClasses='rounded-md mx-auto object-cover'
          />
        </div>

        <div className='flex w-full flex-col items-center md:px-8 md:py-2 lg:w-1/3 lg:px-2 xl:px-8'>
          <p className='text-center xl:text-justify'>
            Surf the waves in Bali or on exciting surf trips with our Private or
            Group lessons.
          </p>
          <p className='text-center xl:text-justify'>
            Enjoy surfing with expert guidance for an unforgettable experience
            -- see what our surfers have to say in{' '}
            <Link
              href='#testimonials'
              target='_self'
              className='underline-gradient-link'
            >
              <span className='text-gradient-always-colored whitespace-nowrap'>
                our testimonials!
              </span>
            </Link>
          </p>

          <ButtonAsGradient
            As='Link'
            href='/surf-lessons'
            target='_self'
            variant='btn-as-gradient-amber'
            extraClasses='mx-auto mt-4 mb-2 hidden lg:inline-block lg:w-3/4'
          >
            Surf Lessons
          </ButtonAsGradient>
        </div>

        <ButtonAsGradient
          As='Link'
          href='/surf-lessons'
          target='_self'
          variant='btn-as-gradient-amber'
          extraClasses='mx-auto mt-4 mb-2 md:w-1/3 lg:hidden'
        >
          Surf Lessons
        </ButtonAsGradient>
      </div>
    </>
  )
}

const HomeAboutMe = ({ homeAboutMeId, homeAboutMeImg, scrollToTop }) => {
  const h2Ref = useRef(null)
  const isInView = useInView(h2Ref, { once: true, threshold: 0.5 })

  return (
    <>
      <motion.h2
        ref={h2Ref}
        variants={h2Variants}
        initial='hide'
        animate={isInView ? 'animate' : 'hide'}
        transition={{ type: 'spring', duration: 1.5, stiffness: 150 }}
        className='mx-auto whitespace-nowrap'
      >
        About me
      </motion.h2>
      <div className='flex flex-col md:my-4 md:flex-row md:items-center lg:my-8 lg:flex-row-reverse'>
        <div className='lg:w-1/2'>
          <div className='mx-auto h-64 w-64 rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]'>
            <CustomCarousel
              carouselKey={homeAboutMeId}
              images={homeAboutMeImg}
              carouselClasses='h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-full'
              priority={true}
              imageClasses='rounded-full object-cover shadow-none'
            />
          </div>
        </div>
        <div className='flex w-full flex-col justify-center md:mx-auto md:px-8 md:py-2 lg:w-1/2'>
          <p className='text-center xl:text-justify'>
            My name is Rendy and I am from{' '}
            <span className='whitespace-nowrap'>Krui, South Sumatra.</span>
          </p>
          <p className='text-center xl:text-justify'>
            I started surfing at the age of 8 and came to Bali in 2019 to work
            as a <span className='whitespace-nowrap'>Surf Instructor</span>{' '}
            <span className='whitespace-nowrap'>at Batu Bolong Beach</span> in
            Canggu.
          </p>
          <p className='text-center xl:text-justify'>
            Learn{' '}
            <Link
              href='/about-me'
              target='_self'
              className='underline-gradient-link'
            >
              <span className='text-gradient-always-colored'>
                more <span className='whitespace-nowrap'>about me.</span>
              </span>
            </Link>
          </p>
        </div>
      </div>
      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </>
  )
}

const HomeSurfTrips = ({ homeSurfTripsId, homeSurfTripsImg, scrollToTop }) => {
  const h2Ref = useRef(null)
  const isInView = useInView(h2Ref, { once: true, threshold: 0.5 })

  return (
    <>
      <motion.h2
        ref={h2Ref}
        variants={h2Variants}
        initial='hide'
        animate={isInView ? 'animate' : 'hide'}
        transition={{ type: 'spring', duration: 1.5, stiffness: 150 }}
        className='mx-auto whitespace-nowrap'
      >
        Surf Trips
      </motion.h2>

      <div className='flex flex-col md:my-4 lg:my-8 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-2/3'>
          <CustomCarousel
            carouselKey={homeSurfTripsId}
            images={homeSurfTripsImg}
            carouselClasses='h-64 sm:h-80 md:h-96 lg:h-[30rem]'
            priority={true}
            imageClasses='rounded-md mx-auto object-cover'
          />
        </div>

        <div className='flex w-full flex-col items-center md:px-8 md:py-2 lg:w-1/3 lg:px-2 xl:px-8'>
          <p className='text-center xl:text-justify'>
            Discover epic surf journeys from Bali to Lombok, Uluwatu, and
            Sumatra.
          </p>
          <p className='text-center xl:text-justify'>
            Join us for the ultimate wave-riding adventure and chase the thrill
            with our guided surf trips.
          </p>
          <ButtonAsGradient
            As='Link'
            href='/surf-trips'
            target='_self'
            variant='btn-as-gradient-amber'
            extraClasses='mx-auto mt-4 mb-2 hidden lg:inline-block lg:w-3/4'
          >
            Surf Trips
          </ButtonAsGradient>
        </div>

        <ButtonAsGradient
          As='Link'
          href='/surf-trips'
          target='_self'
          variant='btn-as-gradient-amber'
          extraClasses='mx-auto mt-4 mb-2 md:w-1/3 lg:hidden'
        >
          Surf Trips
        </ButtonAsGradient>
      </div>

      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </>
  )
}

const HomeTestimonials = ({ scrollToTop }) => {
  const h2Ref = useRef(null)
  const isInView = useInView(h2Ref, { once: true, threshold: 0.5 })

  return (
    <>
      <motion.h2
        ref={h2Ref}
        variants={h2Variants}
        initial='hide'
        animate={isInView ? 'animate' : 'hide'}
        transition={{ type: 'spring', duration: 1.5, stiffness: 150 }}
        className='mx-auto'
      >
        Testimonials
      </motion.h2>

      <div className='md:items-cente flex flex-col md:my-4 md:flex-row lg:my-8 lg:flex-row-reverse'>
        <div className='md:w-1/2 lg:w-2/3'>
          <Testimonials />
        </div>
        <div className='flex w-full flex-col justify-center md:mx-8 md:w-1/2 md:justify-start md:space-y-8 md:py-8 lg:mx-4 lg:w-1/3'>
          <TestimonialStars />
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto my-2 hidden md:inline-block md:w-3/4'
          >
            Surf Now
          </ButtonAsGradient>
        </div>
      </div>

      <ButtonAsGradient
        As='Link'
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
        target='_blank'
        extraClasses='mx-auto my-2 md:hidden'
      >
        Surf Now
      </ButtonAsGradient>

      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </>
  )
}

const HomeMapView = ({ mapMarkers }) => {
  const h2Ref = useRef(null)
  const isInView = useInView(h2Ref, { once: true, threshold: 0.5 })

  return (
    <>
      <motion.h2
        ref={h2Ref}
        variants={h2Variants}
        initial='hide'
        animate={isInView ? 'animate' : 'hide'}
        transition={{ type: 'spring', duration: 1.5, stiffness: 150 }}
        className='mx-auto whitespace-nowrap'
      >
        Visit Us
      </motion.h2>
      <MapView mapMarkers={mapMarkers} />
    </>
  )
}

// getStaticProps
export async function getStaticProps() {
  const homeSurfLessonsImgPromises = homeSurfLessonsImages.map(
    async (image) => {
      const src = getImageUrl(image.image)
      const blurDataUrl = await getBase64ImageUrl(image.image)
      return {
        src,
        blurDataUrl,
        id: image.id,
        alt: image.alt,
      }
    }
  )

  const homeSurfTripsImgPromises = homeSurfTripsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const homeAboutMeImgPromises = homeAboutMeImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const homeSurfLessonsImg = await Promise.all(homeSurfLessonsImgPromises)
  const homeSurfTripsImg = await Promise.all(homeSurfTripsImgPromises)
  const homeAboutMeImg = await Promise.all(homeAboutMeImgPromises)

  const mapMarkers = getMapMarkers(homeSurfTripsImg)

  return {
    props: {
      homeSurfLessonsImg,
      homeSurfTripsImg,
      homeAboutMeImg,
      mapMarkers,
    },
  }
}
