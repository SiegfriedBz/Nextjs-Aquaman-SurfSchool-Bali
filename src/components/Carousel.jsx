import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './carousel.module.css'
import Image from 'next/image'

const Carousel = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>{children}</div>
    </div>
  )
}
export default Carousel

export const CustomCarousel = ({
  images,
  carouselKey = '',
  carouselClasses = '',
  imageClasses = '',
  ...rest
}) => {
  return (
    <Carousel>
      {images.map((image) => {
        return (
          <div
            key={`${carouselKey}-${image.src}`}
            className={`${styles.embla__slide} ${carouselClasses}`}
          >
            <Image
              width='600'
              height='600'
              src={image.src}
              alt={image.alt}
              placeholder='blur'
              blurDataURL={image.blurDataUrl}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className={`
                h-full w-full 
                border-none
                object-cover 
                shadow-2xl md:shadow-none ${imageClasses}`}
              {...rest}
            />
          </div>
        )
      })}
    </Carousel>
  )
}
