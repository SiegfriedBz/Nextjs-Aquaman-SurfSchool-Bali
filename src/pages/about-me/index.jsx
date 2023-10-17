import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import { CustomCarousel } from '@/components/Carousel'
import PageLayout from '@/components/layouts/PageLayout'
import { aboutMeImages } from '@/data/aboutMePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import Head from 'next/head'

const meta = {
  title: 'Aquaman Bali | Surf School | About me',
  description:
    'Discover the story of Rendy, a passionate surfer from Krui, South Sumatra. Join him to learn and improve your surfing skills!',
}

const AboutMe = ({ aboutMeImg }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <PageLayout>
        <section className={`flex h-full w-full flex-col items-center`}>
          <h1 className='title'>About Me</h1>
          <CustomCarousel
            carouselKey='about-me'
            images={aboutMeImg}
            carouselClasses='h-60 md:h-[32rem]'
            priority={true}
            imageClasses='md:w-11/12 rounded-md'
          />
          <p className='text-justify'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
          </p>
          <p className='my-3 text-justify'>
            Batu Bolong is an easy place to learn surfing as a beginner but is
            also good for intermediate surfers.
          </p>
          <p className='text-justify'>
            I really love surfing and want to share my experience, knowledge and
            stoke of surfing with you. It is a lot of fun. Come join me and
            let&apos;s enjoy the waves and make you reach your goals in surfing!
          </p>
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto my-4'
          >
            Surf Now
          </ButtonAsGradient>
        </section>
      </PageLayout>
    </>
  )
}

export default AboutMe

export async function getStaticProps() {
  const aboutMeImgPromises = aboutMeImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const aboutMeImg = await Promise.all(aboutMeImgPromises)

  return {
    props: {
      aboutMeImg,
    },
  }
}
