import { useRef } from 'react'
import { ButtonAsGradient } from '@/components/ButtonAsGradient'
import MapView from '@/components/MapView'
import PageLayout from '@/components/layouts/PageLayout'
import { surfTripsPageImages } from '@/data/surfTripsPageImages'
import { getBase64ImageUrl, getImageUrl } from '@/utils/cloudinaryUtils'
import getMapMarkers from '@/utils/getMapMarkers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faMapLocationDot,
  faBed,
  faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useAppContext } from '@/context/appContext'
import Head from 'next/head'
import MotionAs from '@/components/MotionAs'

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Trips',
  description:
    'Explore Exciting Surf Journeys in Indonesia with Aquaman Bali - Book Now!"',
}

const SurfTrips = ({ surfTripImg, mapMarkers }) => {
  const topRef = useRef(null)
  const mapContainerRef = useRef(null)
  const { setShowPopup, setPopup } = useAppContext()

  const handleSelectTrip = (spot) => {
    setShowPopup(true)
    setPopup(mapMarkers[spot])
    mapContainerRef?.current?.scrollIntoView()
  }

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <PageLayout>
        <section
          ref={topRef}
          className={`flex h-full w-full scroll-mt-[24rem] flex-col content-center`}
        >
          <MotionAs
            As='h1'
            duration={0.7}
            delay={0.2}
            className='w-full text-center'
          >
            Surf Trips
          </MotionAs>
          <MotionAs
            As='h2'
            initialX={100}
            delay={0.5}
            duration={0.8}
            className='mb-2  text-center'
          >
            From Lombok to Sumatra
          </MotionAs>
          <MotionAs
            As='h3'
            delay={0.9}
            duration={0.8}
            className='mb-4 text-center'
          >
            Starting at 500K IDR
          </MotionAs>

          <div
            ref={mapContainerRef}
            className='scroll-mt-[8rem] scroll-smooth px-1'
          >
            <MapView mapMarkers={mapMarkers} />
          </div>

          <hr />

          <DestinationList
            surfTripImg={surfTripImg}
            handleSelectTrip={handleSelectTrip}
            scrollToTop={scrollToTop}
          />

          <hr />

          <BottomContent />
        </section>
      </PageLayout>
    </>
  )
}

export default SurfTrips

SurfTrips.DestinationList = DestinationList
SurfTrips.BottomContent = BottomContent

function DestinationList({ surfTripImg, handleSelectTrip, scrollToTop }) {
  const [
    cangguImg,
    medewiImg,
    lombokImg,
    nusaImg,
    seranganImg,
    uluwatuImg,
    balanganImg,
  ] = surfTripImg

  return (
    <>
      <DestinationDetails
        id='canggu'
        name='Canggu, Bali'
        image={cangguImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <p>
            <span className='text-gradient font-bold'>Canggu is our base</span>,
            at
            <span className='text-gradient font-bold'> Boto Bolong Beach</span>.
          </p>

          <p>
            <span className='text-gradient font-bold'>Wave Type: </span>
            <span className='block'>Gentle and ideal for Beginners</span>
          </p>

          <ul>
            <p className='text-gradient font-bold'>Main Surf Breaks:</p>
            <li className='ms-5 list-disc'>
              <span>Boto Bolong</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Nelayan</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>The Lawn</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Old&apos;s man</span>
            </li>
          </ul>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Beginner</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p>
            <span className='text-gradient font-bold'>Beach Conditions:</span>
            <span className='inline-block'>
              Safe with coral and sand beaches, suitable for all levels except
              during high surf conditions.
            </span>
          </p>

          <p className='text-justify'>
            Canggu is a paradise for Beginners with its calm, manageable waves.
            It offers four main surf breaks and caters to surfers of all levels.
            However, during high surf conditions, the coral and sand beaches can
            become hazardous.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='medewi'
        name='Medewi, Bali'
        image={medewiImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <p>
            <span className='text-gradient font-bold'>Wave Type: </span>
            <span className='block'>Long left waves, around 100 meters</span>
          </p>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Beginner</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p>
            <span className='text-gradient font-bold'>Beach Conditions: </span>
            <span className='block'>
              Rocky with sandy patches, suitable for all levels
            </span>
          </p>

          <p className='text-justify'>
            Medewi is renowned for its iconic long left waves, making it a
            must-visit surf spot in Bali. Despite the rocky beach conditions, it
            accommodates surfers of all levels, including Beginners,
            Intermediates, and those seeking expert advice.
          </p>
          <p className='text-justify'>
            The journey from Canggu takes a maximum of 2 hours by car or
            motorbike.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='balangan'
        name='Balangan Beach, Bali'
        image={balanganImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <p>
            <span className='text-gradient font-bold'>Wave Type: </span>
            <span className='block'>Big and powerful left waves</span>
          </p>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p>
            <span className='text-gradient font-bold'>Beach Conditions: </span>
            <span className='block'>Pristine coral reefs</span>
          </p>

          <p className='text-justify'>
            Balangan Beach boasts some of the best waves in Bali, making it a
            favorite for Intermediate surfers. However, it&apos;s not
            recommended for Beginners due to sharp coral and large waves.
          </p>
          <p className='text-justify'>
            The journey from Canggu to Balangan takes approximately 1.5 hour,
            depending on traffic.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='uluwatu'
        name='Uluwatu, Bali'
        image={uluwatuImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <p>
            <span className='text-gradient font-bold'>Wave Type: </span>
            <span className='block'>Challenging and prestigious</span>
          </p>

          <ul>
            <p className='text-gradient font-bold'>
              Several famous surfing spots close from Uluwatu:
            </p>
            <li className='ms-5 list-disc'>
              <span>Padang Padang</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Bingin Beach</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Dreamland Beach</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Balangan Beach</span>
            </li>
          </ul>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p>
            <span className='text-gradient font-bold'>Beach Conditions: </span>
            <span className='block'>
              Sharp coral and strong waves, not suitable for Beginners
            </span>
          </p>

          <p className='text-justify'>
            Uluwatu is a haven for experienced surfers, known for its big and
            challenging waves. This spot has even hosted prestigious
            competitions. However, it&apos;s not recommended for Beginners due
            to the sharp coral and strong waves. Several famous surf spots are
            nearby, including Padang Padang, Bingin Beach, Dreamland Beach, and
            Balangan Beach.
          </p>
          <p className='text-justify'>
            The journey from Canggu can take up to 1.5 hours.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='serangan'
        name='Serangan, Bali'
        image={seranganImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <p>
            <span className='text-gradient font-bold'>Wave Type: </span>
            <span className='block'>Challenging and prestigious</span>
          </p>
          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p>
            <span className='text-gradient font-bold'>Beach Conditions: </span>
            <span className='block'>
              Sharp coral and strong waves, not suitable for Beginners.
            </span>
          </p>

          <p>
            <span className='text-gradient font-bold'>Access to waves: </span>
            <span className='block'>
              Serangan requires a short boat ride (15 minutes) to reach the surf
              spot.
            </span>
          </p>

          <p className='text-justify'>
            Serangan is a challenging spot with sharp coral and strong waves,
            making it unsuitable for Beginners. Intermediate surfers seeking an
            adventure will enjoy Serangan.
          </p>
          <p className='text-justify'>
            The journey from Canggu takes about 1.5 hours, depending on traffic.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='nusa-lembongan'
        name='Nusa Lembongan'
        image={nusaImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <ul>
            <p className='text-gradient font-bold'>
              Nusa Lembongan offers several spots:
            </p>
            <li className='ms-5 list-disc'>
              <span>Crane Shipwreck</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Isolation</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Play Ground</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Tamrin</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Ceningan</span>
            </li>
          </ul>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Beginner</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p className='text-justify'>
            Nusa Lembongan offers a variety of surf spots close to each other.
            It&apos;s an excellent destination for surfers of all levels. Nusa
            Penida, nearby, is also fantastic for surfing and relaxation.
          </p>
          <p className='text-justify'>
            The journey from Sanur to Nusa Lembongan takes about an hour by fast
            boat.
          </p>
        </>
      </DestinationDetails>

      <hr />

      <DestinationDetails
        id='lombok'
        name='Lombok Island'
        image={lombokImg}
        handleSelectTrip={handleSelectTrip}
        scrollToTop={scrollToTop}
      >
        <>
          <ul>
            <p className='text-gradient font-bold'>
              Lombok offers several spots:
            </p>
            <li className='ms-5 list-disc'>
              <span>Kuta Lombok</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Tanjung Aan</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Dom Dom</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Grupuk Inside</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Grupuk Outside</span>
            </li>
          </ul>

          <ul>
            <p className='text-gradient font-bold'>Best for: </p>
            <li className='ms-5 list-disc'>
              <span>Beginner</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Intermediate</span>
            </li>
            <li className='ms-5 list-disc'>
              <span>Advanced</span>
            </li>
          </ul>

          <p className='text-justify'>
            Lombok offers an array of surf spots close to each other. To reach
            them, you must use a boat due to the considerable distance. The boat
            ride takes only 8-10 minutes to each spot. Lombok is an excellent
            choice for surfers of all levels.
          </p>
          <p className='text-justify'>
            From Bali, you can choose between a scenic ferry boat journey (4-5
            hours) from Padang Bai or a quick flight (1 hour) from Ngurah Rai
            Airport to Lombok International Airport.
          </p>
        </>
      </DestinationDetails>
    </>
  )
}

const DestinationDetails = ({
  id,
  name,
  image,
  handleSelectTrip,
  scrollToTop,
  children,
}) => {
  return (
    /**
     * scroll-mt-[x] used when user comes from Home page MapView marker click
     * relative / absolute used to position the scroll-to-top button
     * */
    <section id={id} className='relative scroll-mt-[6rem] scroll-smooth'>
      <h2>{name}</h2>
      <div
        className='flex cursor-pointer items-center'
        onClick={() => handleSelectTrip(id === 'nusa-lembongan' ? 'nusa' : id)}
      >
        <FontAwesomeIcon
          icon={faEye}
          className='text-gradient me-2 text-2xl font-bold text-ternary hover:text-ternary/90 md:text-4xl'
        />
        <span
          className='text-lg
          text-cf-dark
            transition-all duration-300 ease-in-out
          hover:text-cf-dark/90 
          dark:text-cf-white 
          dark:hover:text-cf-white/90 md:text-3xl'
        >
          See on map
        </span>
      </div>

      <div className='my-4 h-80 w-full md:h-[26rem]'>
        <Image
          width='600'
          height='600'
          src={image.src}
          alt={image.alt}
          loading='lazy'
          placeholder='blur'
          blurDataURL={image.blurDataUrl}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='h-full w-full rounded-lg object-cover shadow-2xl md:w-11/12'
        />
      </div>

      {children}

      <div className='flex justify-center'>
        <ButtonAsGradient
          As='Link'
          href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/'}
          target='_blank'
          extraClasses='mx-auto my-4'
        >
          Surf Now
        </ButtonAsGradient>
      </div>
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        onClick={scrollToTop}
        className='absolute bottom-[0.35rem] right-0 cursor-pointer text-2xl text-ternary-light transition-all hover:text-ternary'
      />
    </section>
  )
}

function BottomContent() {
  return (
    <div className='mt-14'>
      <h5 className='text-gradient text-center font-bold'>
        <span className='me-2 text-xl text-cf-white'>🏄‍♂️</span>Your Board or Ours{' '}
      </h5>
      <p className='text-center'>
        Bring your own board or use one of our top-quality boards.
      </p>

      <h5 className='text-gradient text-center font-bold'>
        <span>
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className='me-2 text-ternary dark:text-ternary/95'
          />
        </span>
        Flexible Departures
      </h5>
      <p className='text-center'>
        Start your surf adventure right from Canggu or meet us at your chosen
        destination.
      </p>

      <h5 className='text-gradient text-center font-bold'>
        <span>
          <FontAwesomeIcon
            icon={faBed}
            className='me-2 text-ternary dark:text-ternary/95'
          />
        </span>
        Stay Your Way
      </h5>
      <p className='text-center'>
        Book your own hotel or let us assist you in finding the perfect spot.
      </p>
    </div>
  )
}

export async function getStaticProps() {
  const surfTripImgPromises = surfTripsPageImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const surfTripImg = await Promise.all(surfTripImgPromises)
  const mapMarkers = getMapMarkers(surfTripImg)

  return {
    props: {
      surfTripImg,
      mapMarkers,
    },
  }
}
