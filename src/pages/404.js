import Image from 'next/image'
import errorImage from '../../public/images/error.jpg'
import { LinkGradient } from '@/components/ButtonGradient'
import PageLayout from '@/components/layouts/PageLayout'

export default function Custom404() {
  return (
    <PageLayout>
      <section className={`flex h-full w-full flex-col items-center`}>
        <h1 className='text-gradient title'>404</h1>
        <h2 className='text-gradient sub-title'>Page not found</h2>

        <hr />

        <Image
          src={errorImage}
          className='h-72 rounded-lg  object-cover shadow-2xl'
          alt='error image'
        />

        <hr />

        <LinkGradient
          href='/'
          target='_self'
          variant='btn-gradient-link-amber'
          extraClasses='mx-auto mt-8'
        >
          Back to Home Page
        </LinkGradient>
      </section>
    </PageLayout>
  )
}
