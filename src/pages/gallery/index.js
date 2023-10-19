import GalleryLayout from '@/components/layouts/GalleryLayout'
import Image from 'next/image'
import { galleryImages } from '@/data/galleryPageImages'
import { getBase64ImageUrl, getImageUrl } from '@/utils/cloudinaryUtils'
import { useId, useState } from 'react'
import Modal from '@/components/Modal'

const Gallery = ({ images }) => {
  const imageId = useId()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImageSrc, setSelectedImageSrc] = useState(null)
  const selectedImage = images?.find((image) => image.src === selectedImageSrc)

  const closeModal = () => {
    setSelectedImageSrc(null)
    setModalIsOpen(false)
  }

  return (
    <GalleryLayout.Body>
      {modalIsOpen && selectedImage && (
        <Modal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          className={modalIsOpen ? 'z-[999] p-4' : 'z-0'}
        >
          <Image
            width='800'
            height='600'
            src={selectedImage.src}
            alt={selectedImage.alt}
            priority={true}
            placeholder='blur'
            blurDataURL={selectedImage.blurDataUrl}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full max-h-[32rem] rounded-lg object-cover shadow-2xl'
          />
        </Modal>
      )}
      <div className='mt-4 flex flex-wrap place-content-center gap-4 md:scroll-mt-[15rem]'>
        {images?.map((image, index) => {
          return (
            <div
              onClick={() => {
                setSelectedImageSrc(image.src)
                setModalIsOpen(true)
              }}
              key={`${imageId}-${image.src}`}
              className='h-72 w-full md:w-72 md:cursor-pointer'
            >
              <Image
                width='600'
                height='600'
                src={image.src}
                alt={image.alt}
                priority={index < 4}
                loading={index > 3 ? 'lazy' : 'eager'}
                placeholder='blur'
                blurDataURL={image.blurDataUrl}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          )
        })}
      </div>
    </GalleryLayout.Body>
  )
}

export default Gallery

Gallery.Layout = GalleryLayout

export async function getStaticProps() {
  const galleryImgPromises = galleryImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const galleryImg = await Promise.all(galleryImgPromises)

  return {
    props: {
      images: galleryImg,
    },
  }
}
