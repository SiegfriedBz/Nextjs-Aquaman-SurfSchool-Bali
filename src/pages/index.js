import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import Hero from '@/components/Hero'
import HomePageLayout from '@/components/layouts/HomePageLayout'
import MapView from '@/components/MapView'
import { Testimonials, TestimonialsLinks } from '@/components/Testimonials'
import { LinkGradient } from '@/components/ButtonGradient'

export default function Home() {
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
        <section id='school-carousel'>
          <h2>Carousel</h2>
          school-carouselIm baby copper mug PBR&B craft beer lo-fi cornhole pork
          belly vaporware blog hot chicken lyft tattooed. Hammock bruh tote bag,
          cupping fingerstache flannel affogato enamel pin echo park pabst
          typewriter gochujang blog green juice. Man braid flexitarian tofu,
          seitan mixtape crucifix pabst bitters gorpcore skateboard craft beer.
          Mukbang flexitarian salvia, microdosing copper mug vinyl Brooklyn man
          braid kombucha mlkshk blog scenester adaptogen snackwave. Ennui
          cupping hot chicken cliche DSA. Tote bag celiac 90s, fanny pack banh
          mi migas
        </section>

        <hr />

        <section id='about-me' className='flex flex-col'>
          <h2>About me</h2>
          Carousel
          <p>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
          </p>
          <LinkGradient
            href='/about-me'
            target='_self'
            variant='btn-gradient-link-amber'
            extraClasses='mx-auto my-4'
          >
            More about me
          </LinkGradient>
        </section>

        <hr />

        <section id='testimonials' className='flex flex-col'>
          <h2 className='mx-auto'>Testimonials</h2>
          <Testimonials />
          <TestimonialsLinks />
          <LinkGradient extraClasses='mx-auto my-4'>Surf Now</LinkGradient>
        </section>

        <hr />

        <section id='home-map-view'>
          <h2>Visit Us</h2>
          <MapView />
        </section>
      </div>
    </HomePageLayout>
  )
}
