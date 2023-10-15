import { useEffect, useState } from 'react'
import { useColorMode } from '../hooks/useColorMode'
import { MoonIcon, SunIcon } from './Icons'

const ButtonToggleTheme = () => {
  const [isClient, setIsClient] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

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
          <MoonIcon className='w-[34px] md:w-[35px] lg:w-[37px]' />
        ) : (
          <SunIcon className='w-[34px] md:w-[35px] lg:w-[37px]' />
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
      className='text-2xl text-amber-500 dark:text-cf-white'
    >
      {toggleIcon}
    </button>
  )
}

export default ButtonToggleTheme
