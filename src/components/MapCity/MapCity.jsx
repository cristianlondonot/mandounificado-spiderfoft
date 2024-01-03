import React, { useRef, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Map, { Source, Layer } from 'react-map-gl';
import bbox from '@turf/bbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import MAP_STYLE from './map-style-basic-v8.json';
import jsonData from '../../../data.json';

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

const sfNeighborhoods = {
  type: 'geojson',
  data: '/municipios_colombia.geojson'
};

const defaultFillLayer = {
  id: 'sf-neighborhoods',
  source: 'sf-neighborhoods',
  type: 'fill',
  paint: {
    'fill-outline-color': '#bb1b1b',
    'fill-color': '#fff',
    'fill-opacity': 0
  }
};

const fillLayer = {
  id: 'sf-neighborhoods-fill',
  source: 'sf-neighborhoods',
  type: 'fill',
  paint: {
    'fill-outline-color': '#1F6030',
    'fill-color': '#d70707',
    'fill-opacity': 0
  }
};

const lineLayer = {
  id: 'sf-neighborhoods-outline',
  source: 'sf-neighborhoods',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#1F6030',
  }
};

// Make a copy of the map style
const updatedMapStyle = {
  ...MAP_STYLE,
  sources: {
    ...MAP_STYLE.sources,
    'sf-neighborhoods': sfNeighborhoods
  },
  layers: [...MAP_STYLE.layers, fillLayer, lineLayer]
};

function MapCity({setExpanded, onDepartamentoChange, ciudadSeleccionada, selectedCoordinates, dtptoSelectedName}) {

  const mapRef = useRef();

  useEffect(() => {
    // Cambia la posición del mapa cuando cambian las coordenadas seleccionadas
    if (onDepartamentoChange) {
      const { latitude, longitude } = onDepartamentoChange.coordenadas;

      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 6.5,
        pitch: 0,
        bearing: 0,
        speed: 1.5,
        curve: 1,
        easing: (t) => t,
      });
      setTimeout(() => {
        // Cambiar la lógica de expansión/contracción aquí
        // Puedes usar el estado o una función proporcionada desde el componente principal
        setExpanded(true);
      }, 600); // Este tiempo debe coincidir con la duración de la animación de zoom
      console.log(onDepartamentoChange)
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

      setTimeout(() => {
        setExpanded(true);
      }, 600); // Este tiempo debe coincidir con la duración de la animación de zoom
      console.log(ciudadSeleccionada)
    }
  }, [selectedCoordinates, onDepartamentoChange, ciudadSeleccionada]);

  const onClick = (event) => {
    const feature = event.features && event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
  
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: 40, duration: 1000 }
      );
    }
    dtptoSelectedName(feature.properties.NOMBRE_DPT)
  };

  const onHover = (event) => {
    const features = event.features;
    if (features && features.length > 0) {
      const hoveredFeature = features[0];
      // Aquí puedes acceder a las propiedades de la característica para obtener el nombre del departamento
      const departmentName = hoveredFeature.properties.nombre;
      console.log('Hovered Department:', departmentName);
      // Puedes mostrar el nombre del departamento en un tooltip o hacer lo que desees
    }
  };

  const onLeave = () => {
    // Puedes realizar acciones cuando el mouse sale de una característica
    console.log('Mouse left feature');
  };

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 6.9078745,
          longitude: -73.1500435,
          zoom: 7.6
        }}
        mapStyle={{
          ...updatedMapStyle,
          layers: [...updatedMapStyle.layers, defaultFillLayer]
        }}
        interactiveLayerIds={['sf-neighborhoods-fill']}
        onClick={onClick}
        onHover={onHover}
        onLeave={onLeave}
        mapboxAccessToken={mapboxToken}
      />
    </>
  );
}

export default MapCity;
