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
      className='flex min-h-[60vh] flex-col items-center justify-between'
    >
      <div className='hero-image opacity-100 dark:opacity-80'></div>
      <div className='hero-title-wrapper flex h-1/2 flex-col justify-start lg:items-end lg:justify-center'>
        <h1 className='title mb-2 text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-right xl:text-8xl 2xl:text-9xl'>
          Aquaman Bali
        </h1>
        <h2 className='sub-title mx-auto text-center text-4xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-7xl'>
          Surf School
        </h2>
      </div>

      <button
        onClick={() => {
          setArrowIsClicked((prev) => !prev)
          router.push('#home-surf-lessons')
        }}
        className={`relative bottom-1 cursor-pointer text-primary dark:text-cf-white ${
          arrowIsClicked ? 'animate-none' : 'arrow'
        }`}
      >
        <FontAwesomeIcon icon={faCircleDown} className='text-5xl md:text-6xl' />
      </button>
    </div>
  )
}

export default forwardRef(Hero)
