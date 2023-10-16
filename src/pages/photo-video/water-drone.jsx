import PhotoVideoLayout from '@/components/layouts/PhotoVideoLayout'
import { getBase64ImageUrl, getImageUrl } from '@/utils/cloudinaryUtils'
import { waterPhoto } from '@/data/videoPageImages'

const PhotoVideoWaterDrone = ({ image }) => {
  return (
    <>
      <PhotoVideoLayout.Body.Header>
        <h2 className='text-center'>Water & Drone</h2>
      </PhotoVideoLayout.Body.Header>

      <PhotoVideoLayout.Body.Content image={image}>
        <h3>Who is it for?</h3>
        <p className='text-justify'>
          If you want extraordinary shots of your surfing, water photography or
          drone shots are for you. Please inquire if you plan a surf trip or
          want to surf a particular surf spot and want in the water or drone
          shots from above (photo/video).
        </p>

        <h3>How does it work?</h3>
        <p className='text-justify'>
          The photographer will be in the water taking close shots of you
          surfing with an underwater camera. Drone shots will be done from the
          beach.
        </p>

        <p className='text-justify'>
          You will be given the files via AirDrop (iPhone) or they can be
          uploaded on WeTransfer for you to download on the same day.
        </p>
      </PhotoVideoLayout.Body.Content>
    </>
  )
}

export default PhotoVideoWaterDrone

PhotoVideoWaterDrone.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(waterPhoto.image)

  const waterPhotoImg = {
    src: getImageUrl(waterPhoto.image),
    blurDataUrl: blurDataUrl,
    id: waterPhoto.id,
    alt: waterPhoto.alt,
  }

  return {
    props: {
      image: waterPhotoImg,
    },
  }
}
