import PageLayout from '@/components/layouts/PageLayout'

const AboutMe = () => {
  return (
    <PageLayout>
      <section className={`flex h-full w-full flex-col items-center`}>
        <h1 className='text-gradient title'>About Me</h1>
        <h2 className='text-gradient sub-title'>H2 SUBTITLE</h2>
        <h3 className='text-gradient'>H3 XXX</h3>
        <h4 className='text-gradient'>H4 XXX</h4>
        <p>P XXX</p>
        <p>P XXX</p>
        <p>P XXX</p>
        <p>P XXX</p>
      </section>
    </PageLayout>
  )
}

export default AboutMe
