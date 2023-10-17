import { useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'

const Hero = (props, heroRef) => {
  const router = useRouter()
  const [arrowIsClicked, setArrowIsClicked] = useState(false)

  return (
    <div
      ref={heroRef}
      className='relative flex min-h-[60vh] w-full flex-col items-center justify-between'
    >
      <div className='hero-image opacity-100 dark:opacity-80'></div>
      <div className='hero-title-wrapper flex h-full w-full flex-col items-center justify-start'>
        <h1 className='title mb-2 w-full text-center text-5xl font-extrabold sm:text-6xl lg:text-7xl xl:my-16 xl:me-8 xl:text-right xl:text-8xl 2xl:my-24 2xl:me-24'>
          Aquaman Bali
        </h1>
        <h2 className='sub-title w-full text-center text-4xl font-extrabold sm:text-5xl xl:me-8 xl:text-right 2xl:me-24 2xl:text-7xl'>
          Surf School
        </h2>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#home-surf-lessons')
        }}
        className={`absolute bottom-1 cursor-pointer text-primary dark:text-cf-white/90 ${
          arrowIsClicked ? 'animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon icon={faCircleDown} className='text-4xl md:text-5xl' />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
