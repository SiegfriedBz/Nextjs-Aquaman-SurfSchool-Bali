import { useState, useRef, useEffect, useCallback, useId } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Hero from '@/components/Hero'
import HomePageLayout from '@/components/layouts/HomePageLayout'
import MapView from '@/components/MapView'
import { Testimonials, TestimonialsLinks } from '@/components/Testimonials'
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
  initial: {
    x: -100,
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      // delay: 0.25,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
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

  useEffect(() => {
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

          <section id='home-visit-us' className='flex scroll-mt-24 flex-col'>
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
  return (
    <>
      <h2 className='mx-auto whitespace-nowrap'>Surf Lessons</h2>
      <CustomCarousel
        carouselKey={homeSurfLessonsId}
        images={homeSurfLessonsImg}
        carouselClasses='h-64 sm:h-80 md:h-96 lg:h-[32rem]'
        priority={true}
        imageClasses='rounded-md mx-auto object-cover'
      />
      <p className='text-center'>
        Surf the waves in Bali or on exciting surf trips with our Private or
        Group lessons.
      </p>
      <p className='text-center'>
        Enjoy surfing with expert guidance for an unforgettable experience --
        see what our surfers have to say in our
        <Link
          href='#testimonials'
          target='_self'
          className='underline-gradient-link'
        >
          {' '}
          <span className='text-gradient-always-colored'>testimonials !</span>
        </Link>
      </p>
      <ButtonAsGradient
        As='Link'
        href='/surf-lessons'
        target='_self'
        variant='btn-as-gradient-amber'
        extraClasses='mx-auto mt-4 mb-2'
      >
        Surf Lessons
      </ButtonAsGradient>
    </>
  )
}

const HomeAboutMe = ({ homeAboutMeId, homeAboutMeImg, scrollToTop }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })

  return (
    <>
      <motion.h2
        ref={ref}
        variants={h2Variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className='mx-auto whitespace-nowrap'
      >
        About me
      </motion.h2>
      <div className='flex flex-col md:flex-row md:items-center md:space-x-16'>
        <div>
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
        <div className='mx-auto flex flex-col justify-center lg:w-1/2'>
          <p className='text-center'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
          </p>
          <p className='my-2 text-center'>
            Learn
            <Link
              href='/about-me'
              target='_self'
              className='underline-gradient-link'
            >
              {' '}
              <span className='text-gradient-always-colored'>
                more about me.
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
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })

  return (
    <>
      <motion.h2
        ref={ref}
        variants={h2Variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className='mx-auto whitespace-nowrap'
      >
        Surf Trips
      </motion.h2>
      <CustomCarousel
        carouselKey={homeSurfTripsId}
        images={homeSurfTripsImg}
        carouselClasses='h-64 sm:h-80 md:h-96 lg:h-[32rem]'
        priority={true}
        imageClasses='rounded-md object-cover'
      />
      <p className='text-center'>
        Discover epic surf journeys from Bali to Lombok, Uluwatu, and Sumatra.
      </p>
      <p className='text-center'>
        Join us for the ultimate wave-riding adventure and chase the thrill with
        our guided surf trips.
      </p>
      <ButtonAsGradient
        As='Link'
        href='/surf-trips'
        target='_self'
        variant='btn-as-gradient-amber'
        extraClasses='mx-auto mt-4 mb-2'
      >
        Surf Trips
      </ButtonAsGradient>

      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </>
  )
}

const HomeTestimonials = ({ scrollToTop }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })

  return (
    <>
      <motion.h2
        ref={ref}
        variants={h2Variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className='mx-auto'
      >
        Testimonials
      </motion.h2>

      <Testimonials />

      <TestimonialsLinks />

      <ButtonAsGradient
        As='Link'
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
        target='_blank'
        extraClasses='mx-auto my-2'
      >
        Surf Now
      </ButtonAsGradient>

      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </>
  )
}

const HomeMapView = ({ mapMarkers }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.1, once: true })

  return (
    <>
      <motion.h2
        ref={ref}
        variants={h2Variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
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
