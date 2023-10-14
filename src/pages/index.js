import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import Hero from '@/components/Hero'
import HomePageLayout from '@/components/layouts/HomePageLayout'

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

        <section id='about-me'>
          about-me Im baby copper mug PBR&B craft beer lo-fi cornhole pork belly
          vaporware blog hot chicken lyft tattooed. Hammock bruh tote bag,
          cupping fingerstache flannel affogato enamel pin echo park pabst
          typewriter gochujang blog green juice. Man braid flexitarian tofu,
          seitan mixtape crucifix pabst bitters gorpcore skateboard craft beer.
          Mukbang flexitarian salvia, microdosing copper mug vinyl Brooklyn man
          braid kombucha mlkshk blog scenester adaptogen snackwave. Ennui
          cupping hot chicken cliche DSA. Tote bag celiac 90s, fanny pack banh
          mi migas
        </section>

        <hr />

        <section id='testimonials'>
          testimonials about-me Im baby copper mug PBR&B craft beer lo-fi
          cornhole pork belly vaporware blog hot chicken lyft tattooed. Hammock
          bruh tote bag, cupping fingerstache flannel affogato enamel pin echo
          park pabst typewriter gochujang blog green juice. Man braid
          flexitarian tofu, seitan mixtape crucifix pabst bitters gorpcore
          skateboard craft beer. Mukbang flexitarian salvia, microdosing copper
          mug vinyl Brooklyn man braid kombucha mlkshk blog scenester adaptogen
          snackwave. Ennui cupping hot chicken cliche DSA. Tote bag celiac 90s,
          fanny pack banh mi migas
        </section>

        <hr />

        <section id='home-map'>
          home-map about-me Im baby copper mug PBR&B craft beer lo-fi cornhole
          pork belly vaporware blog hot chicken lyft tattooed. Hammock bruh tote
          bag, cupping fingerstache flannel affogato enamel pin echo park pabst
          typewriter gochujang blog green juice. Man braid flexitarian tofu,
          seitan mixtape crucifix pabst bitters gorpcore skateboard craft beer.
          Mukbang flexitarian salvia, microdosing copper mug vinyl Brooklyn man
          braid kombucha mlkshk blog scenester adaptogen snackwave. Ennui
          cupping hot chicken cliche DSA. Tote bag celiac 90s, fanny pack banh
          mi migas
        </section>
      </div>
    </HomePageLayout>
  )
}
