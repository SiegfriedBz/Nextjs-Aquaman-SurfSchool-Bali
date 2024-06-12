import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import SurfLessonsLayout from '@/components/layouts/SurfLessonsLayout'
import { privateLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const SurfLessonsPrivate = ({ images }) => {
  return (
    <>
      <SurfLessonsLayout.Body.Header>
        <h2 className='mb-1 text-center md:mb-4'>Private</h2>
        <h3 className='text-center'>1 Coach & 1 Guest</h3>
      </SurfLessonsLayout.Body.Header>

      <SurfLessonsLayout.Body.Content images={images}>
        <div className='flex flex-col items-center'>
          <h2 className='md:text-4xl'>
            1 Surf Lesson<span className='ms-2 text-3xl text-white'>🏄‍♂️</span>
          </h2>
          <div className='flex items-center'>
            <h3>2 hours:</h3>
            <h4 className='ms-2'>400K IDR (USD 26)</h4>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='md:text-4xl'>
            5 Surf Lessons
            <span className='ms-2 text-3xl text-white'>🏄‍♀️🏄‍♂️🏄‍♀️</span>
          </h2>
          <div className='flex items-center'>
            <h3>5 * 2 hours:</h3>
            <h4 className='ms-2'>1.75M IDR (USD 120)</h4>
          </div>
        </div>

        <div className='flex justify-center'>
          <ButtonAsGradient
            As='Link'
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
            target='_blank'
            extraClasses='mx-auto mt-0 mb-4'
          >
            Surf Now
          </ButtonAsGradient>
        </div>
      </SurfLessonsLayout.Body.Content>
    </>
  )
}

export default SurfLessonsPrivate

SurfLessonsPrivate.Layout = SurfLessonsLayout

export async function getStaticProps() {
  const privateLessonsImgPromises = privateLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const privateLessonsImg = await Promise.all(privateLessonsImgPromises)

  return {
    props: {
      images: privateLessonsImg,
    },
  }
}
