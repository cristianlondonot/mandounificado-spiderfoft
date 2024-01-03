import React from 'react';
import Bucaramanga from './Bucaramanga/Bucaramanga';
import Floridablanca from './Floridablanca/Floridablanca';
import './MapSelectCity.sass'
// Importa más componentes de mapa según sea necesario

const mapComponents = {
  BUCARAMANGA: Bucaramanga,
  Floridablanca: Floridablanca,
  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectCity = ({ municipio }) => {

  const SelectedMapComponent = mapComponents[municipio] || null;

  return (
    <div className={`w-full h-full off ${municipio ? 'on' : ''}`} id='mapCitySelect'>
      {SelectedMapComponent ? <SelectedMapComponent /> : <p>Mapa no encontrado</p>}
    </div>
  );
};

export default MapSelectCity;
