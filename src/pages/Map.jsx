import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainer = useRef();
  let map = null;

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbmEyMTAyMTk5NCIsImEiOiJja2kxdmkzdDAwYm91MnBtdm9oYXJjNXo4In0.UDGy3Yom3vQ5xIgZ8vQAiQ';
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.315, 59.940],
      zoom: 11,
    });

    return () => {
      map.remove();
    };

  }, []);

  return (
    <div className='map-wrapper' data-testid='map' ref={mapContainer} />
  );
};

export default Map;