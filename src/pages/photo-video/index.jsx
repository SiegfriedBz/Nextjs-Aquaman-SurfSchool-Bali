import PhotoVideoLayout from '@/components/layouts/PhotoVideoLayout'
import { getBase64ImageUrl, getImageUrl } from '@/utils/cloudinaryUtils'
import { photoVideo } from '@/data/videoPageImages'

const PhotoVideo = ({ image }) => {
  return (
    <>
      <PhotoVideoLayout.Body.Header>
        <h2 className='text-center'>Photo & Video</h2>
      </PhotoVideoLayout.Body.Header>

      <PhotoVideoLayout.Body.Content image={image}>
        <h3 className='mt-4'>Who is it for?</h3>
        <p className='text-justify'>
          Anyone who wants to keep a memory from their surf session. First time
          surfer, beginner, intermediate and advanced surfer - doesn&apos;t
          matter. It is nice to have a memory to take home and show family and
          friends. You decide if you want photos or videos taken of your surf
          session and/or on the beach!
        </p>

        <h3 className='mt-4'>How does it work?</h3>
        <p className='text-justify'>
          Photos or videos will be taken during your surf session (max 2 hours)
          with high quality equipment.
        </p>

        <p className='text-justify'>
          You will be given the files via AirDrop (iPhone) or they can be
          uploaded on WeTransfer for you to download on the same day.
        </p>
      </PhotoVideoLayout.Body.Content>
    </>
  )
}

export default PhotoVideo

PhotoVideo.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(photoVideo.image)

  const photoVideoImg = {
    src: getImageUrl(photoVideo.image),
    blurDataUrl: blurDataUrl,
    id: photoVideo.id,
    alt: photoVideo.alt,
  }

  return {
    props: {
      image: photoVideoImg,
    },
  }
}
