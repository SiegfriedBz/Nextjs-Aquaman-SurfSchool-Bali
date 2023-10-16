import { useState, useRef, useLayoutEffect, useCallback, useId } from 'react'
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
  const [viewportOffset, setViewportOffset] = useState(0)

  // dynamic set hero height to viewport height before painting component to the screen
  const setHeroHeight = useCallback(() => {
    const adjustedHeroHeight = window.outerHeight - viewportOffset
    heroRef.current.style.height = `${adjustedHeroHeight}px`
  }, [viewportOffset])

  useLayoutEffect(() => {
    if (window == undefined || heroRef?.current == null) return

    setViewportOffset(window.outerHeight - window.innerHeight)
    setHeroHeight()
  }, [setHeroHeight])

  return (
    <HomePageLayout>
      <section id='hero'>
        <Hero ref={heroRef} />
      </section>

      <div id='sub-hero'>
        <section id='home-surf-lessons' className='flex scroll-mt-24 flex-col'>
          <h2 className='mx-auto'>Surf Lessons</h2>
          <CustomCarousel
            carouselKey={homeSurfLessonsId}
            images={homeSurfLessonsImg}
            carouselClasses='h-60 md:h-[32rem]'
            priority={true}
            imageClasses='md:w-11/12 rounded-md'
          />
          <p>
            Im baby copper mug PBR&B craft beer lo-fi cornhole pork belly
            vaporware blog hot chicken lyft tattooed. Hammock bruh tote bag,
            cupping fingerstache flannel affogato enamel pin echo park pabst
          </p>
          <ButtonAsGradient
            As='Link'
            href='/surf-lessons'
            target='_self'
            variant='btn-as-gradient-amber'
            extraClasses='mx-auto my-4'
          >
            Surf Lessons
          </ButtonAsGradient>
        </section>

        <hr />

        <section id='home-about-me' className='flex flex-col'>
          <h2 className='mx-auto'>About me</h2>
          <div className='mx-auto h-60 w-60 rounded-full'>
            <CustomCarousel
              carouselKey={homeAboutMeId}
              images={homeAboutMeImg}
              carouselClasses='h-60 w-60 rounded-full'
              priority={true}
              imageClasses='rounded-full'
            />
          </div>
          <p>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
          </p>
          <ButtonAsGradient
            As='Link'
            href='/about-me'
            target='_self'
            variant='btn-as-gradient-amber'
            extraClasses='mx-auto my-4'
          >
            About me
          </ButtonAsGradient>
        </section>

        <hr />

        <section id='home-surf-trips' className='flex flex-col'>
          <h2 className='mx-auto'>Surf Trips</h2>
          <CustomCarousel
            carouselKey={homeSurfTripsId}
            images={homeSurfTripsImg}
            carouselClasses='h-60 md:h-[32rem]'
            priority={true}
            imageClasses='rounded-md'
          />
          <p>
            Im baby copper mug PBR&B craft beer lo-fi cornhole pork belly
            vaporware blog hot chicken lyft tattooed. Hammock bruh tote bag,
            cupping fingerstache flannel affogato enamel pin echo park pabst
          </p>
          <ButtonAsGradient
            As='Link'
            href='/surf-trips'
            target='_self'
            variant='btn-as-gradient-amber'
            extraClasses='mx-auto my-4'
          >
            Surf Trips
          </ButtonAsGradient>
        </section>

        <hr />

        <section id='home-testimonials' className='flex scroll-mt-24 flex-col'>
          <h2 className='mx-auto'>Testimonials</h2>
          <Testimonials />
          <TestimonialsLinks />
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto my-4'
          >
            Surf Now
          </ButtonAsGradient>
        </section>

        <hr />

        <section id='home-visit-us' className='flex scroll-mt-24 flex-col'>
          <h2 className='mx-auto'>Visit Us</h2>
          <MapView mapMarkers={mapMarkers} />
        </section>
      </div>
    </HomePageLayout>
  )
}

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
