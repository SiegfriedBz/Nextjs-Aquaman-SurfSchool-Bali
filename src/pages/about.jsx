import { BorderFullGradient } from '@/components/BorderGradient'
import { ButtonGradient } from '@/components/ButtonGradient'
import PageLayout from '@/components/layouts/PageLayout'

export default function About() {
  return (
    <PageLayout>
      <section className={`flex h-full w-full flex-col items-center`}>
        <h1 className='text-gradient title'>H1 TITLE</h1>
        <h2 className='text-gradient sub-title'>H2 SUBTITLE</h2>
        <h3 className='text-gradient'>H3 XXX</h3>
        <h4 className='text-gradient'>H4 XXX</h4>
        <p>P XXX</p>
        <p>P XXX</p>
        <p>P XXX</p>
        <p>P XXX</p>

        <span className='text-sm xs:text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
          HELLO
        </span>

        <a href=''>LINK</a>

        <br />
        <ButtonGradient extraClasses='my-4'>click me</ButtonGradient>
        <button className='btn'>BUTTON</button>

        <ButtonGradient
          btnVariant='btn-gradient-amber'
          padding='px-4 py-2'
          extraClasses='my-4'
        >
          about me
        </ButtonGradient>

        <ButtonGradient btnVariant='btn-gradient-amber' extraClasses='my-4'>
          about me
        </ButtonGradient>

        <br />
        <BorderFullGradient childrenWrapperExtraClasses='flex w-full flex-col md:flex-row'>
          <div className='w-full bg-red-500 px-5 md:w-1/3'>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
          </div>
          <div className='w-full bg-orange-500 px-5 md:w-2/3'>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
          </div>
        </BorderFullGradient>
        <br />
        <BorderFullGradient
          childrenWrapperColor='bg-orange-500'
          childrenWrapperExtraClasses='p-5'
        >
          <div>XXX</div>
          <div className='columns-3 text-center'>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
            <p>XXX</p>
          </div>
          <p>XXX</p>
          <p>XXX</p>
          <p>XXX</p>
          <p>XXX</p>
          <p>XXX</p>
          <p>XXX</p>
        </BorderFullGradient>
        <br />
        <br />

        <div className='flex h-48 w-48'>
          <div className='w-1/4 bg-blue-500'></div>
          <div className='flex w-1/4 justify-center bg-green-500 transition-all duration-300 ease-in-out hover:w-1/2'>
            XXX
          </div>
          <div className='w-1/2 bg-orange-500'></div>
        </div>

        <br />
        <br />
        <div className='container'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            <div className='h-48 w-full bg-green-500'></div>
            <div className='h-48 w-full bg-blue-500'></div>
            <div className='h-48 w-full bg-orange-500 sm:col-span-2 md:col-span-1'></div>
          </div>
        </div>
        <br />
        <BorderFullGradient childrenWrapperExtraClasses='p-2'>
          <div className='container'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              <div className='h-48 w-full bg-green-500'></div>
              <div className='h-48 w-full bg-blue-500'></div>
              <div className='h-48 w-full bg-orange-500 sm:col-span-2 md:col-span-1'></div>
            </div>
          </div>
        </BorderFullGradient>
      </section>
    </PageLayout>
  )
}
