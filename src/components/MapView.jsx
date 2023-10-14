import { useEffect, useRef } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/appContext'
import MapPopup from './MapPopup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function MapView({ mapMarkers }) {
  const router = useRouter()
  const mapRef = useRef(null)
  const { showPopup, setShowPopup, popup, setPopup } = useAppContext()

  useEffect(() => {
    if (mapRef?.current == null || !showPopup) return

    const [latitude, longitude] = [popup.latitude, popup.longitude]
    mapRef?.current?.flyTo({
      center: [longitude, latitude + 0.0125],
      duration: 2000,
      zoom: 13,
    })
  }, [showPopup, popup])

  const handleSetPopup = (spot) => {
    setPopup(mapMarkers[spot])
    setShowPopup(true)
  }

  const isSurfTripsRoute = router.asPath.includes('/surf-trips')

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      //   initialViewState={{
      //     latitude: mapMarkers.canggu.latitude,
      //     longitude: mapMarkers.canggu.longitude,
      //     zoom: isSurfTripsRoute ? 6 : 10,
      //   }}
      initialViewState={{
        latitude: -8.66,
        longitude: 115.13,
        zoom: isSurfTripsRoute ? 6 : 10,
      }}
      style={{ width: 'auto', height: 450 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
    >
      {/* {showPopup && (
        <Popup
          latitude={popup.latitude}
          longitude={popup.longitude}
          anchor='bottom'
          onClose={() => {
            setShowPopup(false)
          }}
          closeButton={false}
          offsetTop={-30}
        >
          <MapPopup popup={popup} isSurfTripsRoute={isSurfTripsRoute} />
        </Popup>
      )} */}

      {/* {Object.entries(mapMarkers).map(([spot, values]) => {
        return (
          <div key={spot} id={spot} onMouseEnter={() => handleSetPopup(spot)}>
            <Marker
              latitude={values.latitude}
              longitude={values.longitude}
              anchor='bottom'
            >
              <FontAwesomeIcon
                icon={faUmbrellaBeach}
                className={`me-3 ${
                  values.location === 'Canggu'
                    ? 'text-4xl text-sky-500'
                    : 'text-3xl text-amber-400'
                }`}
              />
            </Marker>
          </div>
        )
      })} */}
    </Map>
  )
}
