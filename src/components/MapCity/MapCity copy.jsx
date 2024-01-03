import React, { useRef, useEffect } from 'react';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapCity.sass';

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};

const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
};

const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
};

const MapCity = ({ selectedCoordinates, ciudadSeleccionada, expanded, setExpanded, selectedCityCoordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Cambia la posición del mapa cuando cambian las coordenadas seleccionadas
    if (selectedCoordinates && mapRef.current) {
      const { longitude, latitude } = selectedCoordinates;

      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 7.6,
        pitch: 0,
        bearing: 0,
        speed: 1.5,
        curve: 1,
        easing: (t) => t,
      });
    }

    // Aquí también puedes hacer algo con la ciudad seleccionada
    if (ciudadSeleccionada) {
      const { latitude, longitude } = ciudadSeleccionada.coordenadas;
      // Ajusta el zoom al hacer clic en una ciudad
      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 12,
        pitch: 0,
        bearing: 0,
        speed: 1.5,
        curve: 1,
        easing: (t) => t,
      });

      // Retraso para esperar la finalización de la animación de zoom
      setTimeout(() => {
        // Cambiar la lógica de expansión/contracción aquí
        // Puedes usar el estado o una función proporcionada desde el componente principal
        setExpanded(true);
      }, 600); // Este tiempo debe coincidir con la duración de la animación de zoom
    }
  }, [selectedCoordinates, ciudadSeleccionada]);

  const onClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource('earthquakes');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }
      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });

      // Retraso para esperar la finalización de la animación de zoom
      setTimeout(() => {
        // Cambiar la lógica de expansión/contracción aquí
        // Puedes usar el estado o una función proporcionada desde el componente principal
        setExpanded(true);
      }, 600); // Este tiempo debe coincidir con la duración de la animación de zoom
    });
  };

  useEffect(() => {
    // Resto del código...

    // Aquí también puedes hacer algo con la ciudad seleccionada ***eliminar, codigo repetido
    if (ciudadSeleccionada) {
      const { latitude, longitude } = ciudadSeleccionada.coordenadas;
      // Ajusta el zoom al hacer clic en una ciudad
      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 12,
        pitch: 0,
        bearing: 0,
        speed: 1.5,
        curve: 1,
        easing: (t) => t,
      });

      // Retraso para esperar la finalización de la animación de zoom
      setTimeout(() => {
        // Cambiar la lógica de expansión/contracción aquí
        // Puedes usar el estado o una función proporcionada desde el componente principal
        setExpanded(true);
      }, 600); // Este tiempo debe coincidir con la duración de la animación de zoom
    }
  }, [selectedCoordinates, ciudadSeleccionada]);

  return (
    <div className={`mapCity h-full w-full ${expanded ? 'expanded' : ''}`}>
      <Map
        initialViewState={{
          latitude: 6.9254,
          longitude: -73.1198,
          zoom: 7.6,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={mapboxToken}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <NavigationControl />
        </div>
      </Map>
    </div>
  );
};

export default MapCity;
