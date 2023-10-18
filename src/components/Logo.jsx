import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' id='brand-logo' target='_self' className='brand-logo'>
      <Image
        id='brand logo white'
        src='/logo-white.png'
        alt='brand logo white'
        style={{ objectSize: 'cover' }}
        priority={true}
        width={96}
        height={96}
      />
    </Link>
  )
}

export default Logo
