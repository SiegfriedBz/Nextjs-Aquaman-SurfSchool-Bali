import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' id='brand-logo'>
      <Image
        src='/images/logo-text-white-circle.png'
        alt='brand logo'
        objectFit='cover'
        width={96}
        height={96}
      />
    </Link>
  )
}

export default Logo
