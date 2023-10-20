import { useState, useLayoutEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import MotionAs from './MotionAs'

const arrowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.3,
    },
  },
}

const MotionButton = motion.button

const Hero = () => {
  const router = useRouter()
  const heroRef = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const [viewportOffset, setViewportOffset] = useState(0)
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  // set hero height to viewport height on client
  const setHeroHeight = useCallback(() => {
    if (!isClient) return

    const adjustedHeroHeight = window.outerHeight - viewportOffset
    heroRef.current.style.height = `${adjustedHeroHeight}px`
  }, [viewportOffset, isClient])

  // 2. client-side set hero height to user viewport height before first render
  useLayoutEffect(() => {
    setIsClient(true)
    setViewportOffset(window.outerHeight - window.innerHeight)
    setHeroHeight()
  }, [setHeroHeight])

  // 1. server-side render image h-screen (reserve space for hero image)
  if (!isClient) {
    return (
      <div className='h-screen w-full'>
        <div
          id='hero-image-server'
          className='hero-image h-full opacity-100 dark:opacity-80'
        ></div>
      </div>
    )
  }

  // 3. render full hero section on client with adjusted height
  return (
    <div
      ref={heroRef}
      className={`flex max-h-[100vh] w-full flex-col items-center justify-between`}
    >
      <div
        id='hero-image'
        className='hero-image h-full opacity-100 dark:opacity-80'
      ></div>

      <div className='hero-title-wrapper flex h-full w-full flex-col items-center justify-start'>
        <MotionAs
          As='h1'
          delay={0.5}
          duration={0.8}
          className='title mb-4 w-full text-center text-5xl font-extrabold  sm:text-6xl lg:text-7xl xl:my-16 xl:me-8 xl:text-right xl:text-8xl 2xl:my-24 2xl:me-24'
        >
          Aquaman Bali
        </MotionAs>

        <MotionAs
          As='h2'
          initialX={100}
          delay={0.9}
          duration={0.7}
          className='sub-title w-full text-center text-4xl font-extrabold  sm:text-5xl xl:me-8 xl:text-right 2xl:me-24 2xl:text-7xl'
        >
          Surf School
        </MotionAs>
      </div>

      <MotionButton
        variants={arrowVariants}
        initial='hidden'
        animate='visible'
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#home-surf-lessons')
        }}
        className={`absolute bottom-1 z-[500] cursor-pointer text-primary dark:text-cf-white/90 ${
          arrowIsClicked ? 'animate-none' : 'animate-bounce'
        }`}
      >
        <FontAwesomeIcon
          icon={faCircleDown}
          className='rounded-full bg-cf-white/70 text-4xl ring-[0.05rem] ring-cf-white dark:bg-cf-dark/10 dark:bg-transparent dark:ring-0 md:text-5xl'
        />
      </MotionButton>
    </div>
  )
}

export default Hero
