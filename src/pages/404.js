import Image from 'next/image'
import errorImage from '../../public/images/error.jpg'
import { ButtonAsGradient } from '@/components/ButtonAsGradient'
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

        <ButtonAsGradient
          As='Link'
          href='/'
          target='_self'
          variant='btn-as-gradient-amber'
          extraClasses='mx-auto mt-8'
        >
          Back to Home Page
        </ButtonAsGradient>
      </section>
    </PageLayout>
  )
}
