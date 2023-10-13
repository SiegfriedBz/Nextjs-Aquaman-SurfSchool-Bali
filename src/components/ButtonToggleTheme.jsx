import { useEffect, useState } from 'react'
import { useColorMode } from '../hooks/useColorMode'
import { MoonIcon, SunIcon } from './Icons'
import useScreenOrientation from '@/hooks/useScreenOrientation'

const ButtonToggleTheme = () => {
  const [isClient, setIsClient] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const orientation = useScreenOrientation()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const toggleIcon = (
    <>
      {isClient ? (
        colorMode === 'light' ? (
          <MoonIcon className='w-[33px] fill-cf-dark dark:fill-cf-white' />
        ) : (
          <SunIcon className='w-[33px] fill-cf-dark dark:fill-cf-white' />
        )
      ) : (
        ''
      )}
    </>
  )

  return (
    <button
      id='button-toggle-theme'
      onClick={toggleColorMode}
      className='text-2xl dark:text-cf-white'
    >
      {toggleIcon}
    </button>
  )
}

export default ButtonToggleTheme
